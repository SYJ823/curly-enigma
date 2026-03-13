<template>
  <div class="person">
    <h1>需求：水温达到50℃，或水位达到20cm，则联系服务器</h1>
    <h2 id="demo">水温：{{ temp }}</h2>
    <h2>水位：{{ height }}</h2>
    <button @click="changeTemp">水温+1</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch, watchEffect } from 'vue'

let temp = ref(0)
let height = ref(0)

function changeTemp() {
  temp.value += 10
}

function changeHeight() {
  height.value += 10
}

// 用watch实现，需要明确的指出要监视：temp、height
watch([temp, height], (value) => {
  const [newTemp, newHeight] = value

  if (temp.value >= 50 || height.value >= 20) {
    console.log('联系服务器');
  }
})

// 用watchEffect实现，不用
const stopWatch = watchEffect(()=>{
  if (temp.value >= 50 || height.value >= 20) {
    console.log(document.getElementById('demo')?.innerText);
    console.log('联系服务器');
  }

  if(temp.value === 100 || height.value === 50){
    console.log('清理了');
    stopWatch()
  }
})

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