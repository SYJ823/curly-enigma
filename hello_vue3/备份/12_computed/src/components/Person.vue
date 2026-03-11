<template>
  <div class="person">
    <!-- 姓：<input type="text" :value="firstName"> <br>  :value是v-bind:value的缩写,只可以读取变量数据到页面 -->
    姓：<input type="text" v-model="firstName"> <br> <!-- v-model是v-model:value的缩写，可以双向读取，变量也会随页面修改 -->
    名：<input type="text" v-model="lastName"> <br>
    <button @click="changeFullName">修改全名</button>
    全名：<span>{{ fullName }}</span>
  </div>
</template>

<script lang="ts" setup name="Person234">
import { ref, computed } from 'vue'

let firstName = ref('zhang')
let lastName = ref('san')

//计算属性-只能读取，不能修改
//  let fullName = computed(()=>{
//   return firstName.value + '-' + lastName.value
//  })

//  function changeFullName(){
//   fullName.value=li-si //报错，无法修改
//  }

//既读又修改的写法
let fullName = computed({
  //读取
  get() {
    return firstName.value + '-' + lastName.value
  },
  //修改
  set(val) {
    console.log('有人修改了fullName', val)
    const parts = val ? val.split('-') : ['', ''];
    firstName.value = parts[0] || ''; // 分割后第一个部分（名）
    lastName.value = parts[1] || ''; // 分割后第二个部分（姓）

  }
})

function changeFullName() {
  fullName.value = 'li-si' //不报错，可修改
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