import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache }  from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:9090/graphql/',
})

// Cache implementation
const cache = new InMemoryCache()

// Add headers by middleware
const middlewareLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('access_token')
  operation.setContext({
    headers: {
      Authorization: `Bearer ${token}` || null
    }
  })
  return forward(operation)
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache,
})


Vue.use(VueApollo)


const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

export default apolloProvider