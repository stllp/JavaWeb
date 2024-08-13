<script setup>
/**
 * 路径传参
 * 1、声明式路由传参
 * 2、编程式路由传参
 */
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import ShowDetail from './components/ShowDetail.vue';
import ShowDetail2 from './components/ShowDetail2.vue';
const router = useRouter()

function showDetail(id, language) {
  // router.push(`/showDetail/${id}/${language}`) //方式1
  router.push({ path: `/showDetail/${id}/${language}` })//方式2
}
function showDetail2(param_id, param_language) {
  // router.push(`/showDetail2?id=${id}&language=${language}`) //方式1
  router.push({ path: '/showDetail2',query:{id:param_id,language:param_language} })//方式2
}
</script>

<template>
  <div>
    <router-link to="/showDetail/1/java">声明式路由传参</router-link>
    <button @click="showDetail(2, 'PHP')">编程式路由传参</button>
    <hr>
    <!-- 声明式键值对传参方式1 -->
    <router-link to="/showDetail2?id=1&language=java">声明式键值对传参方式1</router-link> 
     <!-- 声明式键值对传参方式2 -->
    <router-link v-bind:to="{path:'/showDetail2',query:{id:2,language:'php'}}">声明式键值对传参方式2</router-link>
    <button @click="showDetail2(3, 'python')">编程式键值对传参</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
