<script setup>
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import instance from '../axios'
const router = useRouter()
let user = reactive({
    username: "",
    userPwd: ""
})
function goRegist() {
    router.push('/regist')
}
function checkUserName() {
    let regexp = /^[0-9a-zA-Z\u4e00-\u9fff]{2,10}$/g
    let nameEle = document.getElementById('input_username')
    let namespanEle = document.getElementById('span_username')
    console.log(nameEle)
    if (regexp.test(nameEle.value)) {
        namespanEle.innerText = "OK"
        return true
    }
    namespanEle.innerText = "账号必须是2-10位的非特殊字符"
    return false
}
function checkPwd() {
    let regexp = /^\d{6,10}$/
    let pwdEle = document.getElementById('input_pwd')
    let pwdspanEle = document.getElementById('span_pwd')
    if (regexp.test(pwdEle.value)) {
        pwdspanEle.innerText = "OK"
        return true
    }
    pwdspanEle.innerText = "密码必须是6-10位数字"
    return false
}
function checkLogin() {
    let flag1 = checkUserName()
    let flag2 = checkPwd()
    if (flag1 && flag2) {
        return true
    }
    return false
}
async function login() {
    if (!checkLogin) return false
    let { data } = await instance.post('/user/login', user)
    console.log(data)
    if (data.code == 200) {

        //登录成功 跳转到日程界面
        router.push('/showSchedule')
        return true
    }
    alert("登录失败：" + data.message)
    return false

}
</script>

<template>
    <div>
        <h1 class="ht">欢迎使用日程管理系统</h1>
        <h3 class="ht">请登录</h3>
        <form style="text-align: center">
            <table id="tablogin" class="tab">
                <tr class="ltr">
                    <td class="td2">请输入账号:</td>
                    <td class="td1">
                        <input type="text" class="ipt" v-model="user.username" id="input_username"
                            @blur="checkUserName()">
                        <span id="span_username"></span>
                    </td>
                </tr>
                <tr class="ltr">
                    <td class="td2">请输入密码:</td>
                    <td class="td1">
                        <input type="password" class="ipt" v-model="user.userPwd" id="input_pwd" @blur="checkPwd()">
                        <span id="span_pwd"></span>
                    </td>
                </tr>
                <tr class=" ltr">
                    <td colspan="2">
                        <input id="btn_login" type="submit" class="btn" value="登录" @click="login()">
                        <input id="btn_reset" type="reset" class="btn" value="重置">
                        <input id="btn_regist" type="button" class="btn" value="去注册" @click="goRegist()">
                    </td>

                </tr>
            </table>
        </form>
    </div>
</template>

<style scoped>
.tab {
    margin: 0px auto;
    border: 10px solid rgb(29, 211, 181);
    border-collapse: collapse;
    border-radius: 5px;
    width: 800px;
    height: 200px;
}

.ipt {
    width: 200px;
}

.ht {
    text-align: center;
    color: rgb(29, 211, 181);
    font-family: '隶书';
}

tr,
td {
    border: 1px solid rgb(29, 211, 181);
    border-collapse: collapse;
}

.td1 {
    width: 500px;
    border: 1px solid rgb(29, 211, 181);
    border-collapse: collapse;
    text-align: left;
}

.td2 {
    border: 1px solid rgb(29, 211, 181);
    border-collapse: collapse;
    /* text-align: right 20px; */
}

.btn {
    background-color: beige;
    border-radius: 5px;
}
</style>
