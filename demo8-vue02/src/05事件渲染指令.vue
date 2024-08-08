<script setup>
/**
 * 事件渲染指令
 * v-on:事件名称="函数名()"
 * v-on:事件名称="函数名();函数名()"
 * v-on:事件名 可以省略为 @事件名
 */
import { ref } from 'vue';
let counter = ref(10)

let add = () => {
  counter.value++
  return counter.value
}
let minus = () => {
  counter.value--
  return counter.value
}
let fun1=function(){
  let flag= confirm("确定要跳转到人民网吗？")
  if(!flag){
    event.preventDefault() //阻断程序跳转
  }
}
let fun2=function(event){
  let flag= confirm("确定要跳转到人民网吗？")
  if(!flag){
    event.preventDefault() //阻断程序跳转
  }
}
let fun3=function(){
   alert("你点击了")
}
</script>

<template>
  <div>
    <button v-on:click="add(); add()">++</button>
    <button v-on:click="add()">+</button>
    <span>{{ counter }}</span>
    <button @click="minus()">-</button>
    <button @click="minus(); minus()">--</button><br>
    <!-- 可不传参 -->
    <a href="http://www.people.cn/" v-on:click="fun1()">人民网</a><br>
    <!-- 此种传参最常用 -->
    <a href="http://www.people.cn/" v-on:click="fun2($event)">人民网</a><br>
    <!-- v-on:click.prevent 直接阻断 无任何判断 -->
    <a href="http://www.people.cn/" v-on:click.prevent="fun3()">人民网</a><br>
  </div>
</template>

<style scoped></style>
