<template>
  <div class="dialog p-5 rounded-xl">
    <div class="messages" style=" overflow-y: auto; height: 500px;">
      <div v-for="(msg, index) in messages" :key="index" class="message-container">
        <div class="flex mt-5" :class="{ 'admin-message': msg.sender === 'admin', 'user-message': msg.sender !== 'admin' }">
          <p v-if="msg.sender === 'admin'" class="text-gray-500 mr-2">{{ }}</p>
          <p :class="msg.sender === 'admin' ? 'admin-nickname' : 'user-nickname'">{{ msg.sender }} <span class="status_message bg-gray-600 p-1 rounded mr-2">{{ msg.sender }}</span></p>
        </div>
        <div class="p-1" :class="{ 'admin-message': msg.sender === 'admin', 'user-message': msg.sender !== 'admin' }">
          <p class="text p-2 rounded-xl">{{ msg.message }}</p>
        </div>
      </div>
    </div>
    <input placeholder="Введите сообщение..." class="bg-gray-600 p-4 mt-10 text-gray-50" type="text">
    <div class="buttons gap-2 mt-4 grid grid-cols-3 justify-around">
      <button class="p-3 rounded-xl active bg-gray-600 text-gray-50">Быстрый вариант ответа</button>
      <button v-for="i in 5" :key="i" class="p-2 rounded-xl bg-gray-600 text-gray-50">Быстрый вариант ответа</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const { messages } = defineProps({
  messages: Array // Определение пропса
});

// Функция для форматирования времени
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${date.getDate()}/${date.getMonth() + 1} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};
</script>

<style scoped>
.dialog {
  background-color: #222128;
}

.message-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Сообщения отображаются слева */
}

.admin-message {
  align-self: flex-start; /* Расположение сообщений администратора слева */
}

.user-message {
  align-self: flex-end; /* Расположение сообщений пользователя справа */
}


.messages {
  scrollbar-width: thin;
  scrollbar-color: #d0c7c7 #222;
}
.user-nickname{
  margin-left: auto;
}
.text {
  background-color: #222128;
}

.status_message {
  color: white;
}

.active {
  background-color: #F7C901;
  color: black;
}

.buttons button:hover {
  background-color: #403f41;
}

input {
  width: 100%;
  background-color: #0F0E13;
}

.time {
  background: linear-gradient(to right, #333239, rgba(0, 0, 0, 0) 70%);
}

.user-message {

  width: 50%;
}
.admin-message{
  width: 50%;
}



</style>
