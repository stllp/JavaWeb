<script setup>
import instance from './axios'
import { ref, reactive } from 'vue';
let message = ref('')
let message1 = reactive({
  code: "1",
  content: "你好呀!"
})
function getLoveWord() {
  let promise = instance.post("api/rand.qinghua",
    {
      "username": "张三",
      "gender": "男"

    },
    {
      params: {
        "format": "json"
      },
      // headers: {
      //   Accept: "application/json, text/plain, text/html, */*"
      // }
    })
  return promise
}
async function getLoveMessage() {
  let response = await getLoveWord()
  message.value = response.data.content
  Object.assign(message1, response.data)
}
</script>

<template>
  <div>
    <h1>{{ message }}</h1><br>
    <h1>{{ message1.content }}</h1><br>
    <button @click="getLoveMessage()">变</button>
  </div>
</template>

<style scoped></style>
