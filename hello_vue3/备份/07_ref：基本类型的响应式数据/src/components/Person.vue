<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>姓名：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts" setup name="Person234">
 import {ref} from 'vue'  

    //数据  原来是写在data中的，此时的name、age、tel都不是响应式的数据
    let name = ref('张三')  //响应式数据定义方法  
    let age = ref(18)   
    let tel = '13888888888'

    //方法
    function changeName(){
      name.value = 'zhang-san'   //name不是响应式的，name.value是响应式
      console.log(name.value) 
      
    }
    function changeAge(){
      age.value += 1  //同name
    }
    function showTel(){
      alert(tel)  //同name
    }

</script>

<style>
  .person{
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
</style>