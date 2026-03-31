<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- 本质： -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用在组件标签上 -->
    <!-- <AtguiguInput v-model="username"/> -->
     <!-- 本质 -->
    <!-- <AtguiguInput 
      :modelValue="username"  父传子props 用于把数据传递给页面
      @update:modelValue="username = $event" //子传父emit 用于更新数据
    /> -->

    <!-- $event = 事件触发时，自带的那个参数
      原生事件：$event = 事件对象 e
      自定义事件：$event = 子组件传过来的数据
 -->

    <!-- 修改modelValue -->
    <AtguiguInput
      v-model:ming="username"
      v-model:mima="password"
    />
  </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from "vue";
import AtguiguInput from './AtguiguInput.vue'
// 数据
let username = ref('zhansgan')
let password = ref('123456')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
