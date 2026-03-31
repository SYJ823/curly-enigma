<template>
<div class="talk">
  <button @click="getLoveTalk">获取一句土味情话</button>
  <ul>
    <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
  </ul>
</div>
</template>

<script setup lang="ts" name="LoveTalk">
import { useTalkStore } from '@/store/talk'
import { storeToRefs } from 'pinia';

const talkstore = useTalkStore()
const {talkList} = storeToRefs(talkstore)

function getLoveTalk(){
  talkstore.getATalk()
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