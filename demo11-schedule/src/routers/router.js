import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/login.vue'
import Regist from '../components/regist.vue'
import LoginUseNameError from '../components/LoginUseNameError.vue'
import LoginUsePwdError from '../components/LoginUsePwdError.vue'
import RegistFail from '../components/registFail.vue'
import RegistSuccess from '../components/registSuccess.vue'
import ShowSchedule from '../components/showSchedule.vue';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/regist',
            component: Regist
        },
        {
            path: '/loginUseNameError',
            component: LoginUseNameError
        },
        {
            path: '/loginUsePwdError',
            component: LoginUsePwdError
        },
        {
            path: '/registFail',
            component: RegistFail
        },
        {
            path: '/registSuccess',
            component: RegistSuccess
        },
        {
            path: '/showSchedule',
            component: ShowSchedule
        },
    ]
})



export default router