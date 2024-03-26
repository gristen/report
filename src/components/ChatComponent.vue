<template>
  <div class="dialog relative p-5 rounded-xl">
    <div class="report">
      <div class="messages" style="max-height: 100%; overflow-y: auto;">
        <div class="content rounded-xl p-3 ml-1">
          <div v-if="report" class="">
            <div class="title flex justify-between">
              <p>
                <span  class="status_message bg-emerald-400 p-1 rounded mr-2">NEW</span>
                <span>{{ report.user }}</span>
              </p>
              <p  class=" text-gray-500">27.02 1:16 </p>
            </div>
            <p class="text">{{  report.description }}</p>
            <p class="time text-gray-500 p-1 mt-1">только что...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="messages">
      <div v-for="(msg, index) in messages" :key="index" :class="[msg.sender === 'admin' ? 'me' : 'he']">
        <div class="flex nickname mt-5 items-center">
          <div class="nick">
            <p v-if="msg.sender === 'admin'" class="mr-2">
              <span v-if="msg.sender === 'admin'" class="p-1 rounded mr-2 status_message_admin">{{ msg.sender }}</span>
              {{ msg.sender }}
            </p>
          </div>
          <p v-if="msg.sender === 'admin'" class="ml-auto text-gray-500">12\12</p>
          <p v-else class="mr-auto text-gray-500">12\12</p>
          <p v-if="msg.sender !== 'admin'" class="mr-2">{{ msg.sender }}</p>
          <span v-if="msg.sender !== 'admin'" class="p-1 rounded mr-2 status_message_user">{{ msg.sender }}</span>
        </div>
        <div class="p-1">
          <p class="text rounded-xl">{{ msg.message }}</p>
        </div>
      </div>
    </div>
    <div class="buttons_section">
    <input placeholder="Введите сообщение..." class="bg-gray-600 text-gray-50 mt-4 w-full" type="text">
   
    <div class="buttons grid grid-cols-3 gap-3 ">
      <button class="active">Быстрый вариант ответа</button>
      <button v-for="i in 5" :key="i" class="">Быстрый вариант ответа</button>
    </div>
  </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';


const { messages,report } = defineProps({
  messages: Array,
  report: Object ,
});



</script>

<style scoped>

.messages::-webkit-scrollbar-track
{
  border-radius: 0.7813vw;
	background-color: rgba(217, 217, 217, 10%);
}

.messages::-webkit-scrollbar
{
	width: 1px;

}

.nickname{
  font-family: 'Gilroy-Bold', sans-serif;
}

.messages::-webkit-scrollbar-thumb
{
  border-radius: 0.7813vw;
  background-color: #F5F5F5;
}

 .dialog {
    display: flex;
    flex-direction: column;
    height: 100%; 
    margin-left: 1.6667vh;
    background-color: rgba(0, 0, 0, 0.15);
    width: 45.9259vh;
    padding: 1.8519vh 1.8519vh 0.9259vh 1.8519vh;
  }
  
  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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


.nick{
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 1.4111vh;

}
.time{
  font-size: 1.1111vh;
}
.title{
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 1.1111vh;
  margin-bottom: 0.1852vh;

}
.content {
  background-color: #222128;

}

.he div{
  justify-content: end;
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
.active {
  background-color: #F7C901;
  color: black;
}

.buttons button:hover {
  background-color: #403f41;
}

.buttons {
    padding: 0.5729vw 0 0.9896vw 0;
  }

input {
  width: 100%;
  background-color: #0F0E13;
  background-image: url("/src/assets/icons/enter.png");
  background-repeat: no-repeat;
  background-position: right 1.6667vh center;
  padding-right: 20px;
}

.text {
  background-color: #222128;
  font-size: 1.2963vh;
  padding: 0.6481vh 0.463vh 0.6481vh 0.7407vh;

}

.me, .he {
  width: 65%;
  font-size: 1.4111vh;
}

.messages {
  display: flex; flex-direction: column; overflow-y: auto; height: 55%;
  height: 100%; 
  width: 42.4074vh;
  height: 100%;
}


.he {
  margin-left: auto;
}


.time {
  background: linear-gradient(to right, #333239, rgba(0, 0, 0, 0) 70%);
}

.status_message_admin {
  background-color: rgba(244, 37, 37, 1);
  font-family: 'Gilroy-Bold', sans-serif;
  
}

.status_message_user {
  background-color: rgba(255, 255, 255, 0.07);
  color: white;
  font-family: 'Gilroy-Bold', sans-serif;

}
</style>
