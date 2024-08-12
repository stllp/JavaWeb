<script setup>

/**
 * 路由
 * 功能：页面跳转 页面切换
 */
import { ref } from 'vue';
import {useRouter} from 'vue-router'
const router=useRouter()
let myPath = ref('')
function goMyPath(){
  router.push(myPath.value)
}
</script>

<template>
  <div>
    <!-- 声明式路由 -->
    <router-link to="Home">Home页</router-link><br>
    <router-link to="List">List页</router-link><br>
    <router-link to="Update">Update页</router-link><br>
    <router-link to="Add">Add页</router-link><br>
    <router-link to="showAll">showAll页</router-link><br>
    <!-- 编程式路由 -->
    <button @click="goMyPath()">go</button><input type="text" v-model="myPath">
    <hr>
    <!-- 该标签会替换成具体的.vue -->
    <router-view></router-view>
    <hr>
  </div>
</template>

<style scoped></style>
