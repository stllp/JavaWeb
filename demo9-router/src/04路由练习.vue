<script setup>

/**
 * 路由守卫
 * 
 */
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
let myPath = ref('')
function goMyPath() {
  router.push(myPath.value)
}
/**全局前置路由守卫
 * router.beforeEach
 * 在每次路由跳转前 都会执行一次
 */
router.beforeEach((
  to, from, next
  /*
  to 到哪里去
  from 从哪里来
  next 放行的方法 只有执行了该方法 才会放行路由
       next()  路由的放行
       next('/路径') 路由的重定向
  */
) => {
  console.log("beforeEach 放行了")
  console.log(from.path)
  console.log(to.path)
  let userName = window.sessionStorage.getItem("userName")
  if (null == userName && to.path!='/login') {
    console.log("beforeEach 重定向")
    next('/login')
  } else {
    next()
  }

})
/**
 * 全局后置路由守卫
 * router.afterEach
 * 在每次路由跳转后 都会执行一次
 */
router.afterEach((to, from) => {
  console.log("afterEach")
  console.log(from.path)
  console.log(to.path)
})
</script>

<template>
  <div>
    <!-- 该标签会替换成具体的.vue -->
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
