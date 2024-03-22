<script setup>

</script>
<script>

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  },

  data:()=> ({
    links:[
      {title:'Обращения игроков',url:'/main',exact:true},
      {title:'Управление',url:'/'},
      {title:'Логи сервера',url:'/'},
      {title:'Управление транспортом',url:'/'},
      {title:'Управление территориями',url:'/'},
    ]
  })
}
</script>
<template>
  <nav class="w-fit flex flex-col items-center">
    <img class="logo mb-5" src="../../assets/logo%20(1).png" alt="">
    <ul class="sidenav app-sidenav" :class="{open: isOpen}" style="max-height: 100%; overflow-y: auto;">
      <li v-for="link in links" :key="link.url" @click="$router.push(link.url)">
        <div class="sidebar flex items-center" :style="{'position': 'relative'}">
          <img class="absolute z-10" src="../../assets/icons/Vector.png" alt="icons" style="margin-right: 8px;"> <!-- Добавлено значение margin-right -->
          <a class="cursor-pointer link flex-grow relative text-slate-300 link group block max-w-xs rounded-lg  mb-2 ring-1 ring-slate-900/5 shadow-lg space-y-3"
             :href="link.href"
             target="_blank"
             rel="noopener noreferrer"
             :class="{ 'active': $route.path === link.url, 'link': true }">
            {{ link.title }}
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>



<style scoped>
.link {
  background-color: #222128;
  font-family: 'Gilroy-Medium', sans-serif;
  display: flex;
  align-items: center;
  font-size: 12px;
  width: 6.7708vw;
  height: 4.9296vh;
  padding: 20px;
  
}
.sidenav{
  overflow-x: hidden;
}
.link:hover {
  background-color: #F7C901;
  transition: 0.2s;
  color: black;
}
.sidebar {
  width: 7.8125vw;
}
.active {
  background-color: #F7C901;
  color: black;
}
</style>