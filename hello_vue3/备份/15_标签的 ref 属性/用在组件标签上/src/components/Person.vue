<template>
  <div class="person">
  </div>
</template>

<script lang="ts" setup name="Person">

  import { ref } from 'vue'

  let name = ref('张三')
  let age = ref(18)

  // 使用defineExpose将组件中的数据交给外部

defineExpose({name,age})
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