import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

export const useTalkStore = defineStore('talk', {
  actions: {
    async getATalk() {
      //发请求,下面这行的写法是连续解构赋值加重命名
      let { data: { data: { text: title } } } = await axios.get('https://api.shadiao.pro/chp')
      //把请求回来的字符串包装成一个对象：
      let obj = { id: nanoid(), title }
      console.log(obj);
      //放到数组中
      this.talkList.unshift(obj)
    }
  },
  state() {
    return {
      talkList: [
        { id: 'ftrfasdf01', title: '今天你有点怪，哪里怪？怪好看的！' },
        { id: 'ftrfasdf02', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
        { id: 'ftrfasdf03', title: '心里给你留了一块地，我的死心塌地' }
      ]
    }
  }
})