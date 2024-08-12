<script setup>
/**
 * 生命周期 create mount update unmount 4组钩子函数 （创建 挂载 更新 卸载） 
 * 选项式没有on  组合式 有on前缀
 * //https://cn.vuejs.org/
 */
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue';
onBeforeMount(() => {
  console.log("onbeforeMount 加载前")
})
onMounted(() => {
  console.log("onMounted 加载后")
})
onBeforeUpdate(() => {
  let i1el = document.getElementById("i1")
  console.log(i1el)
  console.log("onBeforeUpdate 更新前" + i1el.innerText)
})
onUpdated(() => {
  let i1el = document.getElementById("i1")
  console.log(i1el)
  console.log("onUpdated 更新后" + i1el.innerText)
})
let name = ref("111")
let fun1 = function () {
  name.value = "张三"
}
</script>

<template>
  <div>
    <span id="i1">{{ name }}</span>
    <button id="b1" v-on:click="fun1()"></button>
  </div>
</template>

<style scoped></style>
