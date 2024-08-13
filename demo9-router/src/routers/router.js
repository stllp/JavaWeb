import { createRouter, createWebHashHistory } from 'vue-router'

import Update from '../components/Update.vue'
import Add from '../components/Add.vue'
import List from '../components/List.vue'
import Home from '../components/Home.vue'
import ShowDetail from '../components/ShowDetail.vue'
import ShowDetail2 from '../components/ShowDetail2.vue'
import Login from '../components/login.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/showDetail/:id/:language', //声明式路由传参配置 id language
            component: ShowDetail
        },
        {
            path: '/showDetail2', //
            component: ShowDetail2
        },
        {
            path: '/update',
            component: Update
        },
        {
            path: '/add',
            component: Add
        },
        {
            path: '/list',
            component: List
        },
        
        
    ]
})

export default router