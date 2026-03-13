<template>
    <Person ref="ren" />
    <button @click="test">测试</button>
</template>

<script lang="ts" setup name="APP">
//JS或TS
import Person from './components/Person.vue'
import { ref } from 'vue'

let ren = ref()

function test(){
    console.log(ren) //如果子组件不暴露，看到的是一个实例，看不到数据
    console.log(ren.value.name)
    console.log(ren.value.age)
}

</script>
