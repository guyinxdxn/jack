import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.css'
import axios from 'axios'
import { Timer,Location,Search,Menu,Back,MoreFilled,CaretBottom,Promotion,ArrowRight,CaretRight} from '@element-plus/icons-vue'
import router from './router'




const app=createApp(App)

axios.defaults.baseURL='http://127.0.0.1:8080'
app.config.globalProperties.$http=axios
app.use(ElementPlus)
app.component('timer', Timer)
app.component('Location', Location)
app.component('Search', Search)
app.component('Menu', Menu)
app.component('Back', Back)
app.component('MoreFilled',MoreFilled)
app.component('CaretBottom',CaretBottom)
app.component('Promotion',Promotion)
app.component('ArrowRight',ArrowRight)
app.component('CaretRight',CaretRight)
app.use(router)


app.mount('#app')
