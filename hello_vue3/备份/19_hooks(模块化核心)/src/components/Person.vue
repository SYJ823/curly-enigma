<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">sum+1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import useDog from '@/hooks/useDog'
  import useSum from '@/hooks/useSum'

  let {sum,add} = useSum()
  let {dogList,getDog} = useDog()
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

img{
  height: 100px;
  margin-right: 10px;
}
</style>