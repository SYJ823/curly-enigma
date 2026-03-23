import { defineStore } from 'pinia'

export const useCountStore = defineStore('count',{
  //真正存储数据的地方 状态
  state(){
    return {
      sum:6
    }
  }
})