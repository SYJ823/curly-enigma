<template>
  <div class="person">
    <h1 ref="title1">尚硅谷</h1>
    <h1 ref="title2">前端</h1>
    <h1 ref="title3">Vue</h1>
    <input type="text" ref="inpt"> <br><br>
    <button @click="showLog">点我打印内容</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from 'vue'

//创建，用于存储ref标记的内容
let title1 = ref()
let title2 = ref()
let title3 = ref()

function showLog(){
  // 通过id获取元素 如果遇到和APP.vue里的id重合，会优先打印App.vue里的内容

  //通过ref获取元素 可以避免这种情况 
  console.log(title1.value);
  
}
</script>

<style scoped>
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