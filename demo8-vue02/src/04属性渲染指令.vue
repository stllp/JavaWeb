<script setup>
/**
 * 属性渲染指令
 * v-bind  将数据绑定到元素的属性上
 * v-bind:属性名="数据名"
 * :属性名="数据名"
 */
let imgData = {
  imgUrl: "http://politics.people.com.cn/img/2020wbc/imgs/logo.png",
  name: "人民网",
  URL: "http://www.people.cn/"
}
</script>

<template>
  <a v-bind:href="imgData.URL">
    <img v-bind:src="imgData.imgUrl" :title="imgData.name">
  </a>
</template>

<style scoped></style>
