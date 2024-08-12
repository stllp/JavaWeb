<script setup>
/**
 * 数据的监听器(使用 watchEffect 方法全部监听  watch方法需要区分响应式数据类型)
 * 
 */
import { reactive, ref, watch, watchEffect } from 'vue';
let fullname = ref('')
let firstname = ref('')
let lastname = reactive({
  name: ""
})
// // 监听单个ref变量的写法
// watch(firstname, (newValue, oldValue) => {
//   console.log("newValue=" + newValue + "oldValue=" + oldValue)
//   fullname.value = newValue + lastname.name
// })
// //监听 reactive 对象的写法 以下两种
// // lastname.name 对象的单个属性监听的写法
// // watch(() =>lastname.name, (newValue, oldValue) => {
// //   console.log("newValue=" + newValue + "oldValue=" + oldValue)
// //   fullname.value = firstname.value + newValue
// // })
// // lastname 监听整个对象的写法
// watch(() =>lastname, (newValue, oldValue) => {
//   console.log("newValue=" + newValue.name + "oldValue=" + oldValue.name)
//   fullname.value = firstname.value + newValue.name
// },{deep:true,immediate:true}) //immediate 是否要默认执行一次

//最终使用 watchEffect 方法 全部监听
watchEffect(() => {
  fullname.value = firstname.value + lastname.name
})

</script>

<template>
  <div>
    姓氏<input type="text" v-model="firstname"><br>
    名字<input type="text" v-model="lastname.name"><br>
    全名<span>{{ fullname }}</span>
  </div>
</template>

<style scoped></style>
