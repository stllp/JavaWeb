<script setup>
/**
 * 计算属性 (没多大实际作用 一般都用函数处理)
 * 
 * 方法使用一次会调用运行一次
 * 
 * 计算属性使用多次在数据不变的情况下 只调用运行一次
 * 
 */
import { reactive , computed } from 'vue';
let auctor={
  name:"张三",
  books:["JAVA","算法","JS"]
}
let ifauctor1=function(){
  console.log("ifauctor1")
  return auctor.books.length>0?"是":"否"
}
let ifauctor2=computed(
  ()=>{
    console.log("ifauctor2")
    return auctor.books.length>0?"是":"否"
  }
)
</script>

<template>
  <div>
    <h1>作者{{ auctor.name }}</h1><br>
    是否出版过图书?{{ ifauctor1() }}<br>
    是否出版过图书?{{ ifauctor1() }}<br>
    是否出版过图书?{{ ifauctor1() }}<br>
    是否出版过图书?{{ ifauctor1() }}<br>
    是否出版过图书?{{ ifauctor1() }}<br>

    是否出版过图书?{{ ifauctor2 }}<br>
    是否出版过图书?{{ ifauctor2 }}<br>
    是否出版过图书?{{ ifauctor2 }}<br>
    是否出版过图书?{{ ifauctor2 }}<br>
    是否出版过图书?{{ ifauctor2 }}<br>

  </div>
</template>

<style scoped></style>
