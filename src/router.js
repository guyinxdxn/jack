import {createRouter,createWebHashHistory} from 'vue-router'

import Home from './components/home/Home.vue'
import HomeUi from './components/homeui/HomeUi.vue'
import Tets from './components/homeui/Tets.vue'



import XzdList from './components/home/xzd-list/XzdList.vue'
import XzdList2 from './components/home/xzd-list/XzdList2.vue'

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',redirect:'/homeui'},
        {path:'/homeui',component:HomeUi,name:'HomeUi'},
        {path:'/tets',component:Tets,name:'Tets'},
        {path:'/home',component:Home,name:'Home',redirect:'/home/xzd',children:[
           { path:'xzd',component:XzdList},
           { path:'xzd2',component:XzdList2}
        ]}
    ],
})

export default router