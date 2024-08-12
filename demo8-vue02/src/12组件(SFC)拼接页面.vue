<script setup>
/**
 * 组件传参  子-->父  再 父-->子
 */
import Header from "./components/Head.vue"
import Content from "./components/Content.vue"
import Navigator from "./components/Navigator.vue"
</script>

<template>
  <div>
    <Header class="head"></Header>
    <Navigator class="navigator"></Navigator>
    <Content class="content"></Content>
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
