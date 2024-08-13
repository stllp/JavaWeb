<script setup>
/**
 * 接收传递过来的路径参数
 * useRoute 函数是用来接收参数
 * route.params表示路径参数
 * route.query 表示路径参数
 */
import { useRoute } from 'vue-router';
import { ref, onUpdated } from 'vue';
let languageId = ref(0)
let languageName = ref('')

let route = useRoute()
languageId.value = route.query.id
languageName.value = route.query.language

onUpdated(() => {
  languageId.value = route.query.id
  languageName.value = route.query.language
})
</script>

<template>
  <div>
    <h1>ShowDetail接收键值对参数</h1><br>
    <h3>{{ languageId }}{{ languageName }}是世界上最好的语言</h3>
  </div>
</template>

<style scoped></style>
