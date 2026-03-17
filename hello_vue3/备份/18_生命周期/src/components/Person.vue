<template>
  <div class="person">
    <h2>当前求和为{{ sum }}</h2>
    <button @click="changeSum">sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { onBeforeMount, onBeforeUpdate,onBeforeUnmount, onMounted, onUnmounted, onUpdated, ref } from 'vue'

let sum = ref(0)

function changeSum() {
  sum.value += 1
}

//生命周期
console.log('创建') //vue3的创建钩子在setup里，无需另外写

onBeforeMount(() => {
  console.log('挂载之前')
})
onMounted(() => {
  console.log('挂载完毕')
})
onBeforeUpdate(() => {
  console.log('更新之前')
})
onUpdated(() => {
  console.log('更新完毕')
})
onBeforeUnmount(() => {
  console.log('卸载之前')//如何卸载？-去app.vue父组件里
})
onUnmounted(() => {
  console.log('卸载完毕')
})
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