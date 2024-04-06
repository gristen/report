<template>
    <div class="wrapper relative">
      <div class="header">
        <input type="text" class="full-width-input search" placeholder="Введите координаты для телепорта....">
        <input type="text" class="full-width-input findById" placeholder="Введите ID игрока"> 
      </div>
      <h1 class="title">
        Частопосещаемые точки для телепорта
      </h1>
      <div class="teleports">
      <div v-for="i in 30" :key="i" class="card">
        <img class="teleport_img" src="../../assets/teleports images/Ammo.png" alt="">
        <p class="teleport_title">Ammo-nation #555</p>
        <button class="teleport_button">Телепорт</button>
      </div>
    
      
    </div>

    </div>
  
  </template>
  
  <script>
 
  </script>
  
  <style scoped>
  
  .teleports::-webkit-scrollbar-track
  {
    border-radius: 1.7813vw;
      background-color: rgba(217, 217, 217, 10%);
  }
  .teleports::-webkit-scrollbar
  {
      width: 1px;
  
  }
  .header{
    display: flex;
  }
  .teleports::-webkit-scrollbar-thumb
  {
    border-radius: 0.7813vw;
    background-color: #F5F5F5;
   
  }

  .findById{
    width: 16.6667vh;
    background-color: 
    rgba(255, 255, 255, 0.05);
    height: 2.8704vh;
    font-size: 1.1111vh;
    color: rgba(255, 255, 255, 0.12);
    padding: 1.1111vh, 1.0185vh, 1.1111vh, 1.0185vh;
    font-size: 1.1111vh;
    background-image: url("/src/assets/icons/enter.png");
    background-repeat: no-repeat;
    background-position: right 1.6667vh center;
    background-size: 1.0963vh;
    padding-left: 1.5741vh;
  }

  .teleport_img{
    width: 100%;
  }
 .title{
  color: white;
  margin-top: 1.3889vh;
  margin-bottom: 1.3889vh;
  font-size: 1.2963vh;
 }
  .teleports{
    display: flex;
    flex-wrap: wrap;
    grid-gap: 0.5556vh;
    overflow: auto;
  }
  .card{
     width: 14.5944vh;
    height: 13.2222vh;
    background-color:rgba(255, 255, 255, 0.07) ;
    padding: 0.9259vh 0.9259vh 0.9259vh 0.9259vh;
    border-radius: 0.8333vh;
  }
  .teleport_title{
    font-size: 1.1963vh;
    margin-top: 0.5556vh;
   
  }
  .teleport_button{
    color: white;
    font-size: 1.1963vh;
    background-color:rgba(255, 255, 255, 0.062) ;
    width: 12.037vh;
    height: 2.5926vh;
    border-radius: 0.463vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 0.5556vh;

  }
  .teleport_button:hover{
    background-color: rgba(247, 201, 1, 1);
    transition: 0.2s;
    color: black;
  }
  .enter{
    background-image: url("/src/assets/icons/enter.png");
  }
 
 
  .wrapper{
    display: flex;
      flex-direction: column;
      height: 100%; 
      margin-left: 1.6667vh;
      background-color: rgba(0, 0, 0, 0.15);
      width: 100%;
      padding: 1.8519vh 1.8519vh 0.9259vh 1.8519vh;
  }

    
    input {
    width: 100%;
    background-color: #0F0E13;
    background-repeat: no-repeat;
    background-position: right 1.6667vh center;
    /* padding-right: 20px; */
    margin-right: 0.5556vh;
  }
  
   
  
  
 
  
  .search{
    width: 25vh;
    background-color: 
    rgba(255, 255, 255, 0.05);
    height: 2.8704vh;
    font-size: 1.1111vh;
    color: rgba(255, 255, 255, 0.12);
    padding: 1.1111vh, 1.0185vh, 1.1111vh, 1.0185vh;
    font-size: 1.1111vh;
    background-image: url("/src/assets/icons/enter.png");
    background-repeat: no-repeat;
    background-position: right 1.6667vh center;
    background-size: 1.0963vh;
    padding-left: 1.5741vh;
  }
  
  </style>
  