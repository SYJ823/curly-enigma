<template>
<div class="talk">
  <button @click="getLoveTalk">获取一句土味情话</button>
  <ul>
    <li v-for="talk in talkstore.talkList" :key="talk.id">{{ talk.title }}</li>
  </ul>
</div>
</template>

<script setup lang="ts" name="LoveTalk">
import {reactive} from 'vue'
import axios from "axios" //安装axios并引入
import { nanoid } from 'nanoid' //安装nanoid并引入
import { useTalkStore } from '@/store/talk'

const talkstore = useTalkStore()
let talkList = reactive([
  {id: 'ftrfasdf01', title: '今天你有点怪，哪里怪？怪好看的！'},
  {id: 'ftrfasdf02', title: '草莓、蓝莓、蔓越莓，今天想我了没？'},
  {id: 'ftrfasdf03', title: '心里给你留了一块地，我的死心塌地'}
])

async function getLoveTalk(){
  //发请求,下面这行的写法是连续解构赋值加重命名
  let {data:{data:{text:title}}} = await axios.get('https://api.shadiao.pro/chp')
  //把请求回来的字符串包装成一个对象：
  let obj = {id:nanoid(),title}
  console.log(obj);
  //放到数组中
  talkList.unshift(obj)
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,button {
  margin: 0 5px;
  height: 25px;
}
</style>