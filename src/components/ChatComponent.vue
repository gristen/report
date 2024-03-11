<template>
  <div class="dialog p-5 rounded-xl">
    <div class="messages" style="display: flex; flex-direction: column; overflow-y: auto; height: 500px;">
      <div v-for="(msg, index) in messages" :key="index" :class="[msg.sender === 'admin' ? 'me' : 'he']">
        <div class="flex  mt-5">
          <!-- Проверяем роль отправителя и выводим спан и имя в соответствии с ролью -->
          <span v-if="msg.sender === 'admin'" class="p-1 rounded mr-2 status_message_admin">{{ msg.sender }}</span>
          <p v-if="msg.sender === 'admin'" class="mr-2">{{ msg.sender }}</p>
          <p v-if="msg.sender !== 'admin'" class="mr-2">{{ msg.sender }}</p>
          <span v-if="msg.sender !== 'admin'" class="p-1 rounded mr-2 status_message_user">{{ msg.sender }}</span>
        </div>
        <div class="p-1">
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

// Получение пропса с сообщениями
const { messages } = defineProps({
  messages: Array // Определение пропса
});


</script>

<style scoped>
.content {
  background-color: #222128;
}

.he div{
  justify-content: end;
}

.active {
  background-color: #F7C901;
  color: black;
}

.buttons button:hover {
  background-color: #403f41;
}

.buttons {
  padding: 0 20px 20px 20px;
}

input {
  width: 100%;
  background-color: #0F0E13;
}

.text {
  background-color: #222128;
}

.me, .he {
  width: 50%;
}

.messages {
  scrollbar-width: thin;
  scrollbar-color: #d0c7c7 #222;
}

.he {
  margin-left: auto;
}

.time {
  background: linear-gradient(to right, #333239, rgba(0, 0, 0, 0) 70%);
}

.status_message_admin {
  background-color: red; /* Фон статуса для сообщений от админа */
}

.status_message_user {
  background-color: gray; /* Фон статуса для сообщений от пользователя */

}
</style>
