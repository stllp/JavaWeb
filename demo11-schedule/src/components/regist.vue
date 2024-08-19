<script setup>
import { useRouter } from 'vue-router';
import instance from '../axios';
import { reactive } from 'vue';
let router = useRouter()
let user = reactive({
    username: "",
    userPwd: ""
})
function goLogin() {
    router.push('/login')
}
async function checkUserName() {
    let regexp = /^[0-9a-zA-Z\u4e00-\u9fff]{2,10}$/g
    let nameEle = document.getElementById('input_username')
    let namespanEle = document.getElementById('span_username')
    if (regexp.test(nameEle.value) && nameEle.value != null) {
        let response = await instance.post("/user/findByUserName", user)
        console.log(response.data)
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
function checkRePwd() {
    let regexp = /^\d{6,10}$/
    let pwdEle = document.getElementById('input_pwd')
    let repwdEle = document.getElementById('input_repwd')
    let repwdspanEle = document.getElementById('span_repwd')
    if (pwdEle.value == repwdEle.value && repwdEle.value != null) {
        repwdspanEle.innerText = "OK"
        return true
    }
    if (repwdEle.value == null) {
        repwdspanEle.innerText = "确认密码不能为空!"
    }
    repwdspanEle.innerText = "两次输入密码不一致!"
    return false
}
function checkRegist() {
    let flag1 = checkUserName()
    let flag2 = checkPwd()
    let flag3 = checkRePwd()
    if (flag1 && flag2 && flag3) {
        return true
    }
    return false
}
async function regist() {
    if (!checkRegist()) {
        alert("注册失败!")
        return
    }
    let { data } = await instance.post('/user/regist', user)
    console.log(data)
    if (data.code == 200) {
        alert("注册成功")
        router.push('/login')
    } else if (data.code == 505) {
        alert("账号已经被抢注!")
    } else {
        alert("其它未知错误!")
    }


}
</script>

<template>
    <div>
        <h1 class="ht">欢迎使用日程管理系统</h1>
        <h3 class="ht">请注册</h3>
        <form onsubmit=" return checkRegist()" style="text-align: center">
            <table id="tablogin" class="tab">
                <tr class="ltr">
                    <td class="td2">请输入账号:</td>
                    <td class="td1">
                        <input id="input_username" type="text" class="ipt" v-model="user.username"
                            @blur="checkUserName()">
                        <span id="span_username"></span>
                    </td>
                </tr>
                <tr class="ltr">
                    <td class="td2">请输入密码:</td>
                    <td class="td1">
                        <input id="input_pwd" type="password" class="ipt" v-model="user.userPwd" @blur="checkPwd()">
                        <span id="span_pwd"></span>
                    </td>
                </tr>
                <tr class="ltr">
                    <td class="td2">请再次输入密码:</td>
                    <td class="td1">
                        <input id="input_repwd" type="password" class="ipt" name="repwd" @blur="checkRePwd()">
                        <span id="span_repwd"></span>
                    </td>
                </tr>
                <tr class="ltr">
                    <td colspan="2">
                        <input id="btn_regist" type="submit" class="btn" value="注册" @click="regist()">
                        <input id="btn_reset" type="reset" class="btn" value="重置">
                        <input id="btn_login" type="button" class="btn" value="去登录" @click="goLogin()">
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
