<script setup>
import { provide, inject, ref, onMounted } from 'vue'
import axios from 'axios'
import HeaderComponent from '@/components/App/HeaderComponent.vue'
const items = ref([])

onMounted(async ()=>{ //изменение при загрузки страницы
  try{
    const {data} = await axios.get('https://77c5a6fe3757e543.mokky.dev/messages')
    items.value = data

  }catch (err){
    console.log(err)
  }
})

provide('items', items)
</script>
<template>
  <div class="main p-14 flex">
    <HeaderComponent/>



      <RouterView />
    </div>


</template>

