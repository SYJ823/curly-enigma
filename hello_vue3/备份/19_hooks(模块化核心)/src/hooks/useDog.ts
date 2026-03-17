import { onMounted, reactive } from "vue"
import axios from "axios"

export default function (){
   let dogList = reactive([
  'https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_6567.jpg'
])

async function getDog() {
  try {
    let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
  dogList.push(result.data.message)
  } catch (error) {
    alert()
    
  }
}
//还可以挂载钩子
onMounted(()=>{
  getDog()
})

//向外部暴露数据
return {dogList,getDog}
}