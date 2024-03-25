<template>
  <div class="main  flex">
    <HeaderComponent/>
    <RouterView />
  </div>
</template>

<script>
import { provide, ref, onMounted } from 'vue'
import axios from 'axios'
import HeaderComponent from '@/components/App/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent
  },
  setup() {
    const items = ref([])

    onMounted(async () => {
      try {
        const { data } = await axios.get('https://77c5a6fe3757e543.mokky.dev/reports')
        items.value = data
      } catch (err) {
        console.error(err)
      }
    })

    provide('items', items)
  }
}
</script>

<style scoped>
.main {
  height: 68.8148vh;
  width: 54.1146vw;
}
</style>
