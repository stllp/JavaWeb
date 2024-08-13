<script setup>
import { useRouter } from 'vue-router';
let userName=window.sessionStorage.getItem("userName")
let router=useRouter()
function logout(){
  window.sessionStorage.removeItem("userName")
  router.push('/login')
}
</script>

<template>
  <div>
    <h1>Home页</h1>
    <h3>欢迎 {{ userName }} 登录成功</h3><br>
    <button @click="logout()">退出登录</button>
  </div>
</template>

<style scoped></style>
