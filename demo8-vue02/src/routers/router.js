// 导入创建路由对象的函数
import { createRouter, createWebHashHistory } from 'vue-router'
//导入组件
import Add from '../components/Add.vue'
import List from '../components/List.vue'
import Update from '../components/Update.vue'
import Home from '../components/Home.vue'

const router = createRouter({
    //history属性用于记录历史路由
    history: createWebHashHistory(),
    //用于定义多个
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/add',
            component: Add
        },
        {
            path: '/list',
            component: List
        },
        {
            path: '/update',
            component: Update
        },
        {
            path: '/showAll',
            redirect: '/list' //重定向
        }
    ]
})
export default router