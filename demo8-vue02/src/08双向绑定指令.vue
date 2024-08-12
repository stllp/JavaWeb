<script setup>
/**
 * 单向绑定：页面数据的变动不会影响绑定的响应式数据 v_text
 * 双向绑定：页面数据的变动 也会同时 变动响应式数据 v_model
 */
import { ref } from 'vue';
let input1 = ref('211221')
let input2 = ref('121221')

let blur1 = function () {
  console.log("input1")
  console.log(input1)
}
let blur2 = function () {
  console.log("input2")
  console.log(input2)
}
</script>

<template>
  <div>
    <input type="text" v-text="input1" v-on:blur="blur1()">
    <input type="text" v-model="input2" v-on:blur="blur2()"> <br>
    <input type="text" v-text="input1">
    <input type="text" v-text="input2">
  </div>
</template>

<style scoped></style>
