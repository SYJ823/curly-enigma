<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>

  </div>
</template>

<script lang="ts" setup name="Person234">
import { ref, reactive } from 'vue'
//数据
let car = reactive({ brand: '奔驰', price: 100 })
let sum = ref(0)


//方法
function changePrice() {
  car.price += 10
}
function changeCar(){
  // car={brand:'奥拓',price:1} //reactive重新分配一个新对象，会失去响应式
  // car=reactive{brand:'奥拓',price:1} //也不行

  //下面这个写法可以更新
  Object.assign(car,{brand:'奥拓',price:1})
}
function changeSum() {
  sum.value += 1
}
</script>

<style>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>