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
        <div class="link sidebar flex items-center" :style="{'position': 'relative'}">
          <img class="" src="../../assets/icons/Vector.png" alt="icons" style="margin-right: 8px;"> <!-- Добавлено значение margin-right -->
          <a class=""
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
  font-family: 'Gilroy-Medium', sans-serif;
  display: flex;
  align-items: center;
  font-size: 1.1111vh;
  width: 6.7708vw;
  height: 4.9296vh;
  color: white;

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
  margin-top: 0.6481vh;
  padding-left: 1.0185vh;
  padding-right: 1.0185vh;
  border-radius: 0.463vh;
  border: 1px solid rgba(255, 255, 255, 5%);
  background-color: #222128;
}
.active {

  color: black;
}
</style>