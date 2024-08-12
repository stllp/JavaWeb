<script setup>
/**
 * 组件拼接
 */
import { defineProps } from 'vue';

//接收父组件传递的参数
defineProps({
  message:String
})
</script>

<template>
  <div>
    {{ message }}
  </div>
</template>

<style scoped></style>
