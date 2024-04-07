<template>
  <div class="wrapper relative">
    
      <input type="text" class="full-width-input search" placeholder="Введите возможные данные для поиска...">
 
    <div class="logs">
    
      <div class="log" v-for="(item, index) in logs" :key="index">
        <p class="text"><span class="nickname">{{ item.nickname }}</span>  <span class="action"> {{ item.action }}</span><span class="item">{{ item.item }}</span> за  <span class="price">{{ item.price }} </span> у <span class="vendor">{{ item.vendor }}</span></p>
        <p class="time">{{ item.time }}</p>
      </div>
    
  </div>
  <div class="buttons_section">
    <input placeholder="Введите сообщение..." class="bg-gray-600 text-gray-50 mt-4 w-full enter" type="text">
   
    <div class="buttons grid grid-cols-3 gap-3 ">
      <button class="active">Быстрый вариант ответа</button>
      <button v-for="i in 10" :key="i" class="">Быстрый вариант ответа</button>
    </div>
  </div>
  </div>

</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const logs = ref([])

    onMounted(async () => {
      try {
        const { data } = await axios.get('https://d40a9d1a695e9f51.mokky.dev/logs')
        logs.value = data
      } catch (error) {
        console.error(error)
      }
    })

    return { logs }
  }
}
</script>

<style scoped>

.logs::-webkit-scrollbar-track
{
  border-radius: 1.7813vw;
	background-color: rgba(217, 217, 217, 10%);
}
.logs::-webkit-scrollbar
{
	width: 1px;

}
.logs::-webkit-scrollbar-thumb
{
  border-radius: 0.7813vw;
  background-color: #F5F5F5;
}
.full-width-input {
  width: 100%;
  box-sizing: border-box;
}
.nickname,.item,.vendor{
  color: rgba(255, 255, 255, 1);
  font-family: 'Gilroy-Bold', sans-serif;

}

.price{
  color: rgba(87, 255, 184, 1);
  font-family: 'Gilroy-Bold', sans-serif;
}
.enter{
  background-image: url("/src/assets/icons/enter.png");
  background-size: 1.2185vh; 
}
.text,.time{
  color: 
rgba(255, 255, 255, 0.35);
}
.logs {
 
  font-size: 1.2963vh;
  overflow-y: auto;
  height: 43.9815vh;
  padding: 1.8519vh 1.8519vh 0.9259vh 1.8519vh;
  border-radius: 1.3889vh;

}
.wrapper{
  display: flex;
    flex-direction: column;
    height: 100%; 
    margin-left: 1.6667vh;
    background-color: rgba(0, 0, 0, 0.15);
    width: 100%;
    padding: 1.8519vh 1.8519vh 0.9259vh 1.8519vh;
}


.buttons {
    display: flex;
    flex-wrap: wrap;
   
    align-items: stretch;
    flex-direction: row;
    align-content: center;
  }

  .buttons button {
    width: 14.537vh;
    height: 2.5926vh;
    font-size: 1.1111vh; 
    border-radius: 0.463vh;
    background-color: rgba(255, 255, 255, 5%);
    color: white;
  }
  input {
  width: 100%;
  background-color: #0F0E13;
  background-repeat: no-repeat;
  background-position: right 1.6667vh center;
  /* padding-right: 20px; */
}

  .buttons_section{
  width: 100%;
}
.buttons_section input{
  height: 4.2593vh;
  border-radius: 0.3704vh;
  padding-left: 1.4815vh;
  font-size: 1.1111vh;
}
.buttons button:hover {
  background-color: #403f41;
}
.buttons {
    padding: 0.5729vw 0 0.9896vw 0;
}

.search{
  width: 25vh;
  background-color: 
  rgba(255, 255, 255, 0.05);
  height: 3.8704vh;
  font-size: 1.1111vh;
  color: rgba(255, 255, 255, 1);
  padding: 1.1111vh, 1.0185vh, 1.1111vh, 1.0185vh;
  font-size: 1.1111vh;
  background-image: url('../../../src/assets/icons/seach.svg');
  background-size: 1.2185vh; 
  background-repeat: no-repeat;
  background-position: 0.9259vh center; 
  padding-left: 2.7778vh;
}

.log {
  display: flex;
  margin-bottom: 1.2963vh;
  justify-content: space-between;
}

.highlighted {
  color: rgba(255, 255, 255, 1);
}
</style>
