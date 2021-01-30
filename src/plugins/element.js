import Vue from 'vue'
// 按需导入组件
import { 
    Button, 
    Form, 
    FormItem, 
    Input, 
    Message, 
    Container, 
    Header, 
    Aside, 
    Main, 
    Menu,
    Submenu,
    MenuItem, 
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Row,
    Col
} from 'element-ui'

// 注册全局组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.prototype.$message = Message
