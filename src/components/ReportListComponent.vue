<template>
  <div class="messages cursor-pointer " style="max-height: 100%; overflow-y: auto;">
    <div v-for="report in items" :key="report.id" class="content mr-3 rounded-xl p-3 ml-1" @click="loadDialog(report.id, report)" :class="{ 'active': selectedReportId === report.id }">
      <div class="flex justify-between title">
        <p> <span class="status_message  p-1 rounded mr-2">NEW</span>{{ report.user }}</p>
        <p class="text-gray-500">{{ report.timestamp }}</p>
      </div>
      <p class="mt-2 report_description">{{ report.description }}</p>
      <p class="time p-1 mt-1" >
     <span class="res">   Ждет ответа уже </span>
        <span :class="calculateTimeAgo(report.timestamp).colorClass">{{ calculateTimeAgo(report.timestamp).text }}</span>
</p>
    </div>
  </div>
  <ChatComponent :messages="messages" :report="report" />
</template>

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
    messages.value = data[0]['dialog'];
    report.value = dataReport;
    selectedReportId.value = dataReport.id;
  } catch (error) {
    console.error(error);
  }
};

const calculateTimeAgo = (timestamp) => {
  const reportTime = new Date(timestamp.replace(/(\d{2})\/(\d{2}) (\d{2}):(\d{2})/, '2024-$2-$1T$3:$4:00'));
  const currentTime = new Date().getTime();
  const reportTimeMilliseconds = reportTime.getTime();
  const timeDifference = currentTime - reportTimeMilliseconds;
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  let colorClass = '';

  if (minutesAgo > 15) {
    colorClass = 'red-text';
  } else if (minutesAgo > 3) {
    colorClass = 'orange-text';
  }

  return { text: `${minutesAgo} минут`, colorClass };
};
</script>

<style scoped>
.content {
  background-color: rgba(255, 255, 255, 0.04);
  margin-bottom: 0.7407vh;
}

.orange-text {
 color:rgba(255, 133, 85, 1);
}
.res{
  color: rgba(255, 255, 255, 0.33);
}
.red-text {
  color: rgba(255, 90, 90, 1);
}
.status_message{
  background-color: rgba(13, 183, 142, 1);
}
.title {
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 1.1111vh;
}

.status_message {
  font-size: 1.1111vh;
}

.active {
  background-color: #35323d;
  color: black;
}

.report_description {
  font-size: 1.2963vh;
  line-height: 1.5556vh;
  font-family: 'Gilroy-Regular', sans-serif;
}

.time {
  background: linear-gradient(to right, #333239, rgba(0, 0, 0, 0) 70%);
  font-size: 1.1111vh;
}

.messages {
  margin-left: 1.3889vh;
  width: 31.7593vh;
}

.messages::-webkit-scrollbar-track {
  border-radius: 0.7813vw;
  background-color: rgba(217, 217, 217, 10%);
}

.messages::-webkit-scrollbar {
  width: 1px;
}

.messages::-webkit-scrollbar-thumb {
  border-radius: 0.7813vw;
  background-color: #f5f5f5;
}
</style>
