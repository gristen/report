
<script>



export default {
  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  },

  data:()=> ({
    activeIndex: null,
    links:[
      {title:'Обращения игроков',url:'/main',exact:true,icon:'/src/assets/icons/reports.png'},
      {title:'Управление над игроком',url:'/',icon:'/src/assets/icons/user.png'},
      {title:'Логи сервера',url:'/logs',icon:'/src/assets/icons/logs.png'},
      {title:'Управление транспортом',url:'/',icon:'/src/assets/icons/transport.png'},
      {title:'Управление территориями',icon:'/src/assets/icons/territories.png'},
      {title:'Управление телепортом',url:"/teleports",icon:'/src/assets/icons/teleports.png'},
    ]
  }),
  methods: {
    setActive(index) {
      this.activeIndex = index; 
    }
  }
  
}
</script>
<template>
  <nav class="w-fit flex flex-col items-center">
    <img class="logo mb-5" src="../../assets/logo%20(1).png" alt="">
    <ul class="sidenav app-sidenav" :class="{open: isOpen}" style="max-height: 100%; overflow-y: auto;">
      <li v-for="link in links" :key="link.url" @click="$router.push(link.url)">
        <div   :href="link.href"
             target="_blank"
             rel="noopener noreferrer"
             :class="{ 'active': $route.path === link.url, 'link': true }" class=" sidebar flex items-center" :style="{'position': 'relative'}">
             <img :class="{ 'test1': $route.path === link.url }" class="icons" :src="link.icon" alt="icons">
           <a class="">
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
  width: 12.2222vh;
  height: 4.9296vh;
  color: white;

}


.test1{
  opacity: 1 !important;
  
}
.icons{
  opacity: 0.2;
  margin-right: 1.1111vh;
  width: 1.7593vh;
 
}
.logo{
  width:12.2222vh;
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
  width: 12.2222vh;
  margin-top: 0.6481vh;
  padding-left: 1.0185vh;
  padding-right: 1.0185vh;
  border-radius: 0.463vh;
  border: 1px solid rgba(255, 255, 255, 5%);
  background-color: #222128;
}
.active {
  background-color: #F7C901;
  color: black;

}


</style>