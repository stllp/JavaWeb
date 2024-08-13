<script setup>
/**
 * 路由
 */
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
let router = useRouter()
let userName=ref('')
let passWord=ref('')
function login() {
  if(userName.value=="root"&&passWord.value=="123456"){
    window.sessionStorage.setItem("userName",userName.value)
    window.sessionStorage.setItem("passWord",passWord.value)
    router.push(`/Home`)
  }else{
    alert("账号密码异常!!!")
  }
  
}
</script>

<template>
  <div>
    账号：<input type="text" v-model="userName"> <br>
    密码：<input type="password" v-model="passWord">
    <button @click="login()">登录</button>
  </div>
</template>

<style scoped></style>
