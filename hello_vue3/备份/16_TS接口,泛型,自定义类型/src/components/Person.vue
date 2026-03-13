<template>
  <div class="person">
  </div>
</template>

<script lang="ts" setup name="Person">
import { type PersonInter, type Persons } from '@/types'  // 引入接口

let person: PersonInter = { id: 'asdfg01', name: '张三', age: 18 } //里面的数据必须要符合接口规范的规则,否则报错

//泛型
let personList: Array<PersonInter> = [
  { id: 'asdfg01', name: '张三', age: 18 },
  { id: 'asdfg02', name: '李四', age: 80 },
  { id: 'asdfg01', name: '王五', age: 5 }
]

//自定义类型
let personList2: Persons = [
  { id: 'asdfg01', name: '张三', age: 18 },
  { id: 'asdfg02', name: '李四', age: 80 },
  { id: 'asdfg01', name: '王五', age: 5 }
]
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