<script setup>
import axios from 'axios'
import { ref, reactive } from 'vue';
let message = ref('')
let message1 = reactive({
  code: "1",
  content: "你好呀!"
})
function getLoveMessage() {
  //使用axios发送请求获取土味情话
  //axios({设置请求的参数}) 请求三要素 1 请求的url 2 请求的方式 3 请求的参数 keyvalue json …………
  let promise = axios({
    method: "get",
    url: "https://api.uomg.com/api/rand.qinghua?format=json",
    data: {

    }
  })
  promise.then(function (response) {
    console.log(response)
    /**
     * response 响应结果对象
     * data 服务器响应回来的数据
     * status 响应状态码 200
     * statusText 响应状态描述  ok
     * headers 本次响应的所有响应头
     * config 本次请求的配置信息
     * request 本次请求发送时所使用的xmlHttpRequest对象
     */
    message.value = response.data.content
    //Object.assign(对象1,对象2)//将对象2与对象1相同的属性赋值给对象1
    Object.assign(message1, response.data)
  }).catch(function () {

  })
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
