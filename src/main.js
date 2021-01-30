import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import apolloProvider from '../apollo/apollo.config.js'

// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/font_icon/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider, 
  render: h => h(App)
}).$mount('#app')
