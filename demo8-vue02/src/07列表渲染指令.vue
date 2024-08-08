<script setup>
/**
 * 列表指令
 * v-for 标签
 * v-for="(catr, index) in catrs" :key="index"
 */
import { reactive } from 'vue';
let items = reactive(
  [{ id: "item1", msg: "香蕉" }, { id: "item2", msg: "苹果" }, { id: "item2", msg: "栗子" }]
)
let catrs = reactive(
  [{ goodName: "电脑", price: 6000, amout: 1 }, { goodName: "手机", price: 3000, amout: 1 }, { goodName: "手机壳", price: 20, amout: 10 }]
)
let computer = () => {
  let sum = 0
  for (const index in catrs) {
    sum += catrs[index].amout * catrs[index].price
  }
  return sum
}
let spliceCatr = function (Index) {
  /**
   * catrs 不能被改变地址  改变地址了 和 界面的响应关联就无效了
   */
  // let tempcatrs=reactive([])
  // let n = 0
  // for (const i in catrs) {
  //   if (i == Index) continue
  //   // console.log(index)
  //   tempcatrs[n] = catrs[i]
  //   n++
  // }
  // catrs = reactive(tempcatrs)
  // console.log(catrs)
  catrs.splice(Index,1)
}
let clearCatrs=()=>{
  catrs.splice(0,catrs.length)
}
</script>

<template>
  <div>
    <ul>
      <table border="1px">
        <tr>
          <th>序号</th>
          <th>商品</th>
          <th>价格</th>
          <th>数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
        <tr v-for="(catr, index) in catrs" :key="index">
          <td v-text="index + 1"></td>
          <td v-text="catr.goodName"></td>
          <td v-text="catr.price"></td>
          <td v-text="catr.amout"></td>
          <td>{{ catr.amout * catr.price }}</td>
          <td v-on:click="spliceCatr(index)" style="color: red;">删除</td>
        </tr>
        <tr>
          <td colspan="6">{{ "合计:" + computer() }}</td>
        </tr>
      </table>
      <span v-on:click="clearCatrs()">一键清空</span>
      <br>
      <li v-for="(item, index) in items" :key="item.id">
        {{ index + 1 }} {{ item.msg }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
