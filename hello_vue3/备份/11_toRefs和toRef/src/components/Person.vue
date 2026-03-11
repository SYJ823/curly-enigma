<template>
  <div class="person">
    <h2>姓名{{ person.name }}</h2>
    <button @click="changeName">修改名字</button>
    <h2>年龄{{ person.age }}</h2>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="Person234">
  import { reactive,toRefs } from 'vue';

  //数据
  let person = reactive({
    name:'张三',
    age:18
  })

  let {name,age} = toRefs(person) //将一个响应式对象中的每一个属性，转换为ref对象

  //方法
  function changeName(){
    name.value +='~'
    console.log(person.name);//person里的数据也会跟着变，因为被关联起来，本质还是同一个数据
    
  }

  function changeAge(){
    age.value +=1
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