<!-- <script>
/**setup语法糖
 * setup 标签 省略了 es6中的导入默认 export default {setup() {return{}} 结构代码
 */
import { ref } from 'vue';
export default {
  setup() {
    let counter = ref(10)
    let  fun1=() => {
      counter.value++
    }
    let  fun2=() => {
      counter.value--
    }
    return { counter ,fun1,fun2}
  }
}
</script> -->

<script setup>
/**响应式数据
 * ref ,reactive,toRef,toRefs 此类函数 把counter 等 声明式变量 改为响应式变量 响应式变量 html中才能同步响应
 * ref 针对 单个变量
 * reactive 针对对象
 * toRef,toRefs 将对象的单个 或 多个属性 转化为响应式变量 转化为变量后 在script里面操作需要加上.vlue
 */
import { ref, reactive, toRef, toRefs } from 'vue';
let counter = ref(10)
let fun1 = () => {
  counter.value++
}
let fun2 = () => {
  counter.value--
}
let person = reactive({
  name: "张三",
  age: 10
})
let next = () => {
  person.age++,
    person.name += 1
}
let p_age = toRef(person,"age")

let {name,age} =toRefs(person)
let addage=()=>{
  p_age.value++
}

</script>



<template>
  <!-- 多函数， ；间隔都行 -->
  <button @click="counter += 3, counter++">++++</button>
  <button @click="counter += 3">+++</button>
  <button @click="fun1(); fun1()">++</button>
  <button @click="fun1()">+</button>
  <span v-text="counter" style="width: 50px;"></span>
  <button @click="fun2()">-</button>
  <button v-on:click="fun2(), fun2()">--</button>
  <br>
  <span>姓名：{{ person.name }}</span>
  <span>年龄：{{ person.age }}</span>
  <button @click="next()">下一个</button><br>
</template>

<style scoped></style>
