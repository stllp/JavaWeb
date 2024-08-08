
<script setup>
/**
 * v-text  不能识别html代码
 * v-html
 * {{}}插值表达式
 * v-***vue的指令
 * 指令必须依赖标签在标签中使用
 * 指令支持模版字符串
 * 指令支持常见的运算符
 */
let msg="你好"
let beep="蜜 蜂"
let foot="<h1>你好</h1>"

</script>

<template>
  <span v-text="msg"></span><br>
  <span v-text="`对面的你:${msg}`"></span><br>
  <span v-text="2+2"></span><br>
  <span v-text="beep.split(' ').reverse().join()"></span><br>
  <span v-text="foot"></span><br>
  <span v-html="foot"></span><br>
</template>

<style scoped></style>
