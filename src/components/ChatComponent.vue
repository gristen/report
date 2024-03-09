<script setup>
import { inject } from 'vue'

console.log(inject('items'))
import MessageListComponent from '@/components/MessageListComponent.vue'
</script>
<template>
  <MessageListComponent />
  <div class="dialog p-5 rounded-xl">
  <div class="title">
    <div class="content rounded-xl p-3  ml-1" >
      <div class="flex justify-between">
        <p> <span class="status_message bg-emerald-400 p-1 rounded mr-2">NEW</span>nickname</p>
        <p class="text-gray-500">27/07 1.16</p>
      </div>
      <p class="mt-2">Всем привет, у меня тут проблема проооосто капец, очень всё жёстко нужна помощью ...</p>
      <p class=" time text-gray-500 p-1 mt-1 ">только что...</p>
    </div>
  </div>
  <div class="messages" style="display: flex; flex-direction: column; overflow-y: auto; height: 500px;">
    <div class="me">
      <div class="flex justify-between mt-5 ">
        <p> <span class="status_message bg-red-500 p-1 rounded mr-2">ADMIN</span>nickname</p>
        <p class="text-gray-500 mr-2"> 27/07 1.16</p>
      </div>
      <div class="p-1 ">
        <p class=" text p-2 rounded-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      </div>
    </div>
    <div class="he">
      <div class="flex justify-between mt-5 ">
        <p class=" ml-2 text-gray-500">27/07 1.16</p>
        <p> nickname <span class="status_message bg-gray-600 p-1 rounded mr-2">user</span></p>

      </div>
      <div class="p-1 ">
        <p class=" text p-2 rounded-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      </div>
    </div>
    <div class="me">
      <div class="flex justify-between mt-5 ">
        <p> <span class="status_message bg-red-500 p-1 rounded mr-2">ADMIN</span>nickname</p>
        <p class="text-gray-500 mr-2"> 27/07 1.16</p>
      </div>
      <div class="p-1 ">
        <p class=" text p-2 rounded-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      </div>
    </div>
    <div class="he">
      <div class="flex justify-between mt-5 ">
        <p class=" ml-2 text-gray-500">27/07 1.16</p>
        <p> nickname <span class="status_message bg-gray-600 p-1 rounded mr-2">user</span></p>

      </div>
      <div class="p-1 ">
        <p class=" text p-2 rounded-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      </div>
    </div>



    </div>
  <input  placeholder="Введите сообщение..." class="bg-gray-600 p-4 mt-10 text-gray-50 " type="text">
  <div class="buttons  gap-2 mt-4 grid grid-cols-3 justify-around ">
    <button class="p-3 rounded-xl active  bg-gray-600 text-gray-50">Быстрый вариант ответа</button>
    <button class="p-2  rounded-xl bg-gray-600 text-gray-50">Быстрый вариант ответа</button>
    <button class="p-2 rounded-xl  bg-gray-600 text-gray-50">Быстрый вариант ответа</button>
    <button class="p-2 rounded-xl  bg-gray-600 text-gray-50">Быстрый вариант ответа</button>
    <button class="p-2 rounded-xl bg-gray-600 text-gray-50">Быстрый вариант ответа</button>
    <button class="p-2 rounded-xl  bg-gray-600 text-gray-50">Быстрый вариант ответа</button>
  </div>
  </div>
</template>

<style scoped>
.content{
  background-color: #222128;

}

.active{
  background-color: #F7C901;
  color: black;
}

.buttons button:hover{
  background-color: #403f41;
}

.buttons{
  padding: 0 20px 20px 20px;
}
input{
  width: 100%;
  background-color: #0F0E13;

}
.text{
  background-color: #222128;
}
.me,.he{
  width: 50%;

}
.messages{
  scrollbar-width: thin;
  scrollbar-color: #d0c7c7 #222;
}
.he{
  margin-left: auto;
}
.time{
  background: linear-gradient(to right, #333239, rgba(0, 0, 0, 0) 70%);
}
</style>
