<template>
  <div class="person">
   <h1>情况一：监视【ref】定义的【基本数据类型】</h1>
   <h2>当前求和为：{{ sum }}</h2>
   <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person234">
import { ref,watch } from 'vue';

let sum = ref(0)

function changeSum(){
  sum.value+=1
}

//监视，情况一：监视【ref】定义的【基本类型】数据
const stopWatch = watch(sum,(newValue,oldValue)=>{
  console.log('sum变化了',newValue,oldValue)
  if(newValue >= 10){
    stopWatch()
  }
})  //stopWatch这个变量存的是 watch 返回的停止函数（Vue 内部写好了注销监听的逻辑）

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