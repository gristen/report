<template>
  <div class="dialog relative p-5 rounded-xl">
    <div class="report">
      <div class="messages" style="max-height: 100%; overflow-y: auto;">
        <div class="content mr-3 mt-3 rounded-xl p-3 ml-1">
          <div v-if="report" class="">
            <div class="title flex justify-between">
              <p>
                <span  class="status_message bg-emerald-400 p-1 rounded mr-2">NEW</span>
                <span>{{ report.user }}</span>
              </p>
              <p  class=" text-gray-500">27.02 1:16 </p>
            </div>
            <p class="text">{{ report.description }}</p>
            <p class="time text-gray-500 p-1 mt-1">только что...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="messages">
      <div v-for="(msg, index) in messages" :key="index" :class="[msg.sender === 'admin' ? 'me' : 'he']">
        <div class="flex mt-5 items-center">
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
          <p class="text p-2 rounded-xl">{{ msg.message }}</p>
        </div>
      </div>
    </div>
    <div class="buttons_section">
    <input placeholder="Введите сообщение..." class="bg-gray-600 p-4 text-gray-50 mt-4 w-full" type="text">
    <div class="buttons grid grid-cols-3 gap-3 ">
      <button class="rounded-xl active bg-gray-600 text-gray-50 ">Быстрый вариант ответа</button>
      <button v-for="i in 5" :key="i" class="rounded-xl bg-gray-600 text-gray-50 ">Быстрый вариант ответа</button>
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

 .dialog {
    display: flex;
    flex-direction: column;
    height: 100%; 
  }
  
  .buttons button {
    width: 100%;
    height: 2.5926vh;
    font-size: 12px; 
  }

  @media (max-width: 1900px) {
    .buttons button {
      font-size: 11px; 
    }
  }
.nick{
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 14px;

}
.time{
  font-size: 12px;
}
.title{
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 12px;
  margin-bottom: 2px;

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
.active {
  background-color: #F7C901;
  color: black;
}

.buttons button:hover {
  background-color: #403f41;
}

.buttons {
    /* display: flex;
    flex-wrap: wrap; */
    /* justify-content: space-between; */
    padding: 20px 0;
  }

input {
  width: 100%;
  background-color: #0F0E13;
}

.text {
  background-color: #222128;
  font-size: 14px;

}

.me, .he {
  width: 50%;
}

.messages {
  scrollbar-width: thin;
  scrollbar-color: #d0c7c7 #222;
  display: flex; flex-direction: column; overflow-y: auto; height: 55%;
  height: 100%; 
}

.he {
  margin-left: auto;
}


.time {
  background: linear-gradient(to right, #333239, rgba(0, 0, 0, 0) 70%);
}

.status_message_admin {
  background-color: red;
  padding: 5px;
}

.status_message_user {
  background-color: #242328;
  color: white;
  padding: 5px;

}
</style>
