import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  //actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions: {
    increment(value:any) {
      //修改数据(this是当前的store)
      this.sum+=value
    },
    decrement(value:any){
      this.sum-=value
    }
  },
  //真正存储数据的地方 状态
  state() {
    return {
      sum: 6,
      school: 'atguigu',
      address: '洪福科技园'
    }
  },
  getters:{
    bigSum:state =>state.sum*10,
    upperSchool():string{
      return this.school.toUpperCase()//大写
    }
  }
})