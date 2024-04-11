<template>
    <div class="wrapper relative">
      <div class="header">
        
        <input type="text" class="full-width-input create_transport" placeholder="Введите название чтобы создать транспорт"> 
      </div>
      <div class="titles">

      
      <h1 class="title">
        Текущий транспорт
      </h1>
        <h1 class="button_title">Управление</h1>
    </div>
      <div class="active_transport">
        
        <div class="card">
            <div class="card_img">
                <img class="transport_img" src="../../assets/cars images/Dodge.svg" alt="">
            </div>
        <p class="transport_title">Ammo-nation #555</p>
        <button class="transport_button">Телепорт</button>
      </div>
 
      <div class="buttons_section">
      
    <div class="buttons grid grid-cols-3 ">
      <button class="active">Какое-то действие тут</button>
      <button v-for="i in 10" :key="i" class="">Какое-то действие тут</button>
    </div>
  </div>
      </div>
      <h1 class="transport_list_title">Tранспорт <span>(115 моделей)</span></h1>
      <div class="transports">
      <div v-for="i in 30" :key="i" class="card">
        <div class="card_img">
        <img class="transport_img" src="../../assets/cars images/Dodge.svg" alt="">
    </div>
        <p class="transport_title">Ammo-nation #555</p>
        <button class="transport_button">Создать</button>
      </div>
    
      
    </div>

    </div>
  
  </template>
  
  <script>
 
  </script>
  
  <style scoped>
  
  .transports::-webkit-scrollbar-track
  {
    border-radius: 1.7813vw;
      background-color: rgba(217, 217, 217, 10%);
  }
  .transports::-webkit-scrollbar
  {
      width: 1px;
  
  }
  .active{
  background-color: #F7C901;
  color: #0F0E13;
}
  .button_title{
    font-size: 1.2963vh;
    color: white;
    margin-left: 4.2593vh;
  }
  .transport_list_title{
    font-size: 1.2963vh;
    color: white;
    margin: 1.3889vh 0px 1.3889vh 0px;

  }
  .transport_list_title span{
    color: rgba(255, 255, 255, 0.35);
    font-size: 1.2963vh;
  }

  .buttons_section{
    margin-left: 1.7593vh;
   
  }

  .card_img{
    width: 9.8148vh;
    height: 5vh;
    margin: 0 auto;
  }
  .header{
    display: flex;
  }

  .titles{
    display: flex;
    align-items: center;
  }

  


  .active_transport{
    display: flex;
 
  }

  .buttons button:hover {
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
}
  
  .transports::-webkit-scrollbar-thumb
  {
    border-radius: 0.7813vw;
    background-color: #F5F5F5;
   
  }

  .create_transport{
    width: 76.2963vh;
    background-color: rgba(0, 0, 0, 0.21);
    height: 4.2593vh;
    font-size: 1.1111vh;
    color: white;
    padding: 1.1111vh, 1.0185vh, 1.1111vh, 1.0185vh;
    font-size: 1.1111vh;
    background-image: url("/src/assets/icons/enter.svg");
    background-repeat: no-repeat;
    background-position: right 1.6667vh center;
    background-size: 1.0963vh;
    padding-left: 1.5741vh;
    border-radius: 0.7407vh;
  }

  .transport_img{
    width: 100%;
  }
 .title{
  color: white;
  margin-top: 1.3889vh;
  margin-bottom: 1.3889vh;
  font-size: 1.2963vh;
  
 }
  .transports{
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
  .transport_title{
    font-size: 1.1963vh;
    margin-top: 0.5556vh;
   
  }
  .transport_button{
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
  .transport_button:hover{
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
      border-radius: 1.3889vh;
  }

    
    input {
    width: 100%;
    background-color: #0F0E13;
    background-repeat: no-repeat;
    background-position: right 1.6667vh center;
    /* padding-right: 20px; */
    margin-right: 0.5556vh;
  }
  
   
  
  
 
  
  </style>
  