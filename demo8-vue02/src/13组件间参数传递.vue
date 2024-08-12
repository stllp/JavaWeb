<script setup>
/**
 * 组件间传递参数
 */
import Header from "./components/Head.vue"
import Content from "./components/Content.vue"
import Navigator from "./components/Navigator.vue"
import { ref } from "vue";
let menu = ref('')
//父组件接收数据的方式
let receiver = function (data) {
  menu.value = data
}
</script>

<template>
  <div>
    <!-- {{ menu }} -->
    <hr>
    <Header class="head"></Header>
    <Navigator @sendMenu="receiver" class="navigator"></Navigator>
    <Content class="content" :message="menu"></Content>
  </div>
</template>

<style scoped>
.head {
  height: 80px;
  border: 1px solid;
}

.navigator {
  width: 15%;
  height: 800px;
  border: 1px solid;
  float: left;
}

.content {
  width: 83%;
  height: 800px;
  border: 1px solid;
  float: right;
}
</style>
