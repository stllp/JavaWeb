<script setup>
/**
 * 条件渲染指令
 * v-if=         //非真时组件都不会加载
 * v-else        //上一个v-if 取反
 * v-show=       //非真时组件会加载只是不显示
 */
import { ref } from 'vue';
let flag=ref(false)
</script>

<template>
  <div>
   <h1 v-if="flag">hello 你好呀！！！</h1>
   <h1 v-else>hello ！！！</h1>
   <h1 v-show="flag">hello 你好呀！！！</h1>
  </div>
</template>

<style scoped></style>
