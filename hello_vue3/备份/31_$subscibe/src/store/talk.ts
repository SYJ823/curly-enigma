import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

export const useTalkStore = defineStore('talk', {
  actions: {
    async getATalk() {
      let { data: { data: { text: title } } } = await axios.get('https://api.shadiao.pro/chp')
      let obj = { id: nanoid(), title }
      this.talkList.unshift(obj)
    }
  },
  state() {
    return { //不把数据写死了，||[]防止第一次使用浏览器没有本地数据
      talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
    }
  }
})