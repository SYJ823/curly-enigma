<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>姓名：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <hr>
    <h2>测试：{{a}}</h2>
    <h2>测试：{{c}}</h2>
    <h2>测试：{{d}}</h2>
    <button @click="b">测试</button>
  </div>
</template>

<script lang="ts">
 //JS或TS
 export default {
  name:'Person', //组件名

  data() {
    return {
      a:100,
      c:this.name, //data可以调用setup里的数据
      d:900
    }
  },
  methods:{
    b(){
      console.log('b');
      
    }
  },
  setup(){
    //console.log(this) //setup函数中的this是undefined，Vue3中已经弱化this了
    
    //数据  原来是写在data中的，此时的name、age、tel都不是响应式的数据
    let name = '张三'  
    let age = 18   
    let tel = '13888888888'
    // let x=d  //setup不能调用data里的数据

    //方法
    function changeName(){
      name = 'zhang-san' //注意：这样修改name，页面是没有变化的
      console.log(name) //name确实改了，但页面没有变化
      
    }
    function changeAge(){
      age += 1  //同name
    }
    function showTel(){
      alert(tel)  //同name
    }
     
    //将数据、方法交出去，模板中才可以使用
    return {name,age,changeName,changeAge,showTel}

    //setup的返回值也可以是一个渲染函数
    // return ()=> '哈哈'
  }
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