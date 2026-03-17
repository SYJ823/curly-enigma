import { onMounted, reactive, ref } from "vue"
import axios from "axios"

export default function () {
  let sum = ref(0)

function add() {
  sum.value+=1
}

//挂载钩子
onMounted(()=>{
  add()
})

 return {sum,add}
}