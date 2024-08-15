<script setup>
import axios from 'axios'
import { ref, reactive } from 'vue';
let message = ref('')
let message1 = reactive({
  code: "1",
  content: "你好呀!"
})
function getLoveWord() {
  //使用axios发送请求获取土味情话
  //axios 的get post 方法简化请求
  //axios.get(url)
  //axios.get(url,{请求的其它信息})
  //axios.get(url,{params:{键值对信息},header:{请求头信息}})
  //axios.get(url,{要放入请求体中的json串},{params:{键值对信息},header:{请求头信息}})
  //
  // let promise = axios.get("https://api.uomg.com/api/rand.qinghua",
  //   {
  //     params: {
  //       "format": "json"
  //     },
  //     headers: {
  //       Accept: "application/json, text/plain, text/html, */*"
  //     }

  //   })
  let promise = axios.post("https://api.uomg.com/api/rand.qinghua",
    {
      "username": "张三",
      "gender": "男"

    },
    {
      params: {
        "format": "json"
      },
      headers: {
        Accept: "application/json, text/plain, text/html, */*"
      }
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
