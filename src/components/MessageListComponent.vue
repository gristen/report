<script setup>
  import { inject } from 'vue'

  const items = inject('items')
</script>
<template>

  <div class="messages" style="max-height: 100%; overflow-y: auto;">
    <div class="content mr-3 mt-3 rounded-xl p-3  ml-1"


    >
      <div class="flex justify-between">
        <p> <span class="status_message bg-emerald-400 p-1 rounded mr-2">NEW</span>nickname</p>
        <p class="text-gray-500">27/07 1.16</p>
      </div>
      <p class="mt-2">Всем привет, у меня тут проблема проооосто капец, очень всё жёстко нужна помощью ...</p>
      <p class=" time text-gray-500 p-1 mt-1 ">только что...</p>
    </div>

  </div>

</template>
<style scoped>
  .content{
    background-color: #222128;
    width: 500px;
  }
  .time{
    background: linear-gradient(to right, #333239, rgba(0, 0, 0, 0) 70%);
  }
  .messages{
    scrollbar-width: thin;
    scrollbar-color: #d0c7c7 #222;
  }
</style>