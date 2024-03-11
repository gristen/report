
<script setup>
import { inject, ref } from 'vue'
import axios from 'axios'
import ChatComponent from '@/components/ChatComponent.vue'

const messages = ref([])
const report = ref(null);
const items = inject('items')
const selectedReportId = ref(null);

const loadDialog = async (userId, dataReport) => {
  try {
    const { data } = await axios.get(`https://77c5a6fe3757e543.mokky.dev/messages?userId=${userId}`);
    messages.value = data[0];
    report.value = dataReport;
    selectedReportId.value = dataReport.id;
  } catch (error) {
    console.error(error);
  }
};



</script>

<template>
  <div class="messages cursor-pointer " style="max-height: 100%; overflow-y: auto;">
    <div v-for="(report, index) in items" :key="index" class="content mr-3 mt-3 rounded-xl p-3 ml-1" @click="loadDialog(report.id,report)" :class="{ 'active': selectedReportId === report.id }">
      <div class="flex justify-between">
        <p> <span class="status_message bg-emerald-400 p-1 rounded mr-2">NEW</span>{{ report.user }}</p>
        <p class="text-gray-500">{{ report.timestamp }}</p>
      </div>
      <p class="mt-2">{{ report.description }}</p>
      <p class="time text-gray-500 p-1 mt-1">только что...</p>
    </div>
  </div>
  <ChatComponent :messages="messages.messages" :report="report"  />
</template>

<style scoped>
.content {
  background-color: #222128;
  width: 500px;
}

.active {
  background-color: #35323d;
  color: black;
}

.time {
  background: linear-gradient(to right, #333239, rgba(0, 0, 0, 0) 70%);
}

.messages {
  scrollbar-width: thin;
  scrollbar-color: #d0c7c7 #222;
}
</style>
