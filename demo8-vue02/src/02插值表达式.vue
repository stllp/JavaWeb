
<script setup>
/**
 * 插值表达式
 * 语法{{数据名字/函数/对象调用}}
 */
import { ref, reactive, toRef, toRefs } from 'vue';
let msg = "hello vue3"
let getMsg=()=>{
  return "hello vue3 getMsg"
}
let beep ="蜜 蜂"
let age = 20
let cars=[{name:"黄瓜",price:6,amount:10},{name:"香蕉",price:8,amount:5},{name:"苹果",price:6,amount:20}]
let sumMoney=function(){
  let money=0
  for (const index in cars) {
    money+=cars[index].price*cars[index].amount
  }
  return money
}
</script>



<template>
  <span>{{ msg }}</span><br>
  <span>{{ getMsg()}}</span><br>
  <span>{{ age>18?"成年":"未成年" }}</span><br>
  <span>{{ beep.split(' ').reverse().join() }}</span><br>
  <span>{{ sumMoney() }}</span><br>
  <span>{{ cars[0].price*cars[0].amount + cars[1].price*cars[1].amount+ cars[2].price*cars[2].amount}}</span><br>
</template>

<style scoped></style>
