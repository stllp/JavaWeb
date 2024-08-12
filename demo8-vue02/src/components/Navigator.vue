<script setup>
/**
 * 组件拼接
 */
//defineEmits 用于定义向父组件提交数据的事件以及正式的提交数据
import { defineEmits } from 'vue';
//定义一个向父组件提交数据的事件  事件名称自定义
const emits = defineEmits(["sendMenu"])
//提交数据的方法
let send=function(data){
  emits("sendMenu",data)
}
</script>

<template>
  <div>
    <ul>
      <li @click="send('角色管理')">角色管理</li>
      <li @click="send('部门管理')">部门管理</li>
      <li @click="send('人员管理')">人员管理</li>
      <li @click="send('菜品类别管理')">菜品类别管理</li>
      <li @click="send('菜品管理')">菜品管理</li>
      <li @click="send('餐厅管理')">餐厅管理</li>
      <li @click="send('桌台管理')">桌台管理</li>
    </ul>
  </div>
</template>

<style scoped></style>
