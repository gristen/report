
<template>
    <div class="wrapper relative">
      <div class="header">
        <input type="text" class="full-width-input findUser" placeholder="Введите CID или полный ник игрока"> 
      </div>
      <div class="result">

    <div class="data">
      <h1>По вашему запросу найден:  <span>Eduard Sovetov (CID 34-588)</span></h1>
      <div class="characteristics">
     
          <div class="col">
            <p>какая-то характеристика <span>$value$</span></p>
          <p>какая-то характеристика <span>$value$</span></p>
          <p>какая-то характеристика <span>$value$</span></p>
          <p>какая-то характеристика <span>$value$</span></p>
        </div>
       <div class="col">
        <p>какая-то характеристика <span>$value$</span></p>
          <p>какая-то характеристика <span>$value$</span></p>
          <p>какая-то характеристика <span>$value$</span></p>
          <p>какая-то характеристика <span>$value$</span></p>
       </div>
       <div class="col">
        <p>какая-то характеристика <span>$value$</span></p>
          <p>какая-то характеристика <span>$value$</span></p>
          <p>какая-то характеристика <span>$value$</span></p>
          <p>какая-то характеристика <span>$value$</span></p>
       </div>
    
        </div>
      <div class="active_territory">
        <div class="info_houses">
          <h1>Дома</h1>
          <p>3 штуки</p>
        </div>
        <div class="card" v-for="i in 4" :key="i">
          <div class="card_img">
            <img class="territory_img" src="../../assets/territories/house.svg" alt="">
          </div>
          <p class="territory_title">Дом №555</p>
        </div>
     
        <div class="info_houses">
          <h1>Бизнесы</h1>
          <p>3 штуки</p>
        </div>
        <div class="card" v-for="i in 3" :key="i">
          <div class="card_img">
            <img class="territory_img" src="../../assets/territories/house.svg" alt="">
          </div>
          <p class="territory_title">Дом №555</p>
        </div>
        
      </div>
      <div class="transports">
        <div class="info_transports">
          <h1>Транспорт</h1>
          <p>3 штуки</p>
        </div>
      <div class="card" v-for="i in 8" :key="i">
          <div class="card_img">
            <img class="territory_img" src="../../assets/cars images/infernus.svg" alt="">
          </div>
          <p class="territory_title">infernus</p>
        </div>
      </div>
    
    </div>
    
  </div>
  <div class="buttons_section">
          <div class="buttons grid grid-cols-5">
            <button class="active">Какое-то действие тут</button>
            <button v-for="i in 19" :key="i" class="">Какое-то действие тут</button>
          </div>
        </div>
  </div>
  
    
  </template>
  <script>
   
  </script>
  <style scoped>
  .data{
    width: 67.3148vh;
  }
  .houses{
    display: flex;
  }
  .result { 
    background-color: rgba(255, 255, 255, 0.02);
    padding: 2.037vh 0vh 2.037vh 2.037vh;
    border-radius: 1.3889vh;
  
  }

  .data h1{
    font-size: 1.2963vh;
    color: rgba(255, 255, 255, 0.35);
    margin-bottom: 1.2963vh;
  }
  .data span{
    color: white;
  }
  .transports{
    display: flex;
   justify-content: space-between;
   margin-top: 1.5741vh;

  }
  .transports .card{
    width: 6.6815vh;
  }
.info_transports{
  font-size: 1.2963vh;
}
.info_transports h1{

  color: white;
}
.info_transports p{
  color: rgba(255, 255, 255, 0.35);
}


  .managment_getto{
    display: flex;
  }
  .territories::-webkit-scrollbar-track
  {
    border-radius: 1.7813vw;
      background-color: rgba(217, 217, 217, 10%);
  }
  .territories::-webkit-scrollbar
  {
      width: 1px;
  
  }
  .info_houses{
    width: 5.6481vh;
  }
  .info_transports{
    width: 5.6481vh;
  }
  .info_houses h1{
    color : white;
    font-size: 1.2963vh;
  }

  .info_houses p{
    color : rgba(255, 255, 255, 0.35);
    font-size: 1.2963vh;
  }
  .request{
    font-size: 1.2963vh;
    color: rgba(255, 255, 255, 0.35);
    margin-bottom: 1.2963vh;
  
  }
  .control_title{
    font-size: 1.2963vh;
    color: white;
    margin-bottom: 0.7407vh;
  }
  .active{
    background-color: #F7C901;
    color: #0F0E13;
  }
  
  .buttons_section h1{
    font-size: 1.2963vh;
    color: white;
    margin-bottom: 1.3889vh;
  }
  .buttons_section{
    margin-top: 1.0185vh;
  }
  .characteristics p{
    font-size: 1.1111vh;
    color: rgba(255, 255, 255, 0.35);
    line-height: 1.3481vh;
    margin-bottom: 0.8333vh;
  }
  .characteristics{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.7593vh;
  }
  .characteristics span{
    color: white;
  }
  .button_title{
    font-size: 1.2963vh;
    color: white;
    margin-left: 4.2593vh;
  }
  .territory_list_title{
    font-size: 1.2963vh;
    color: white;
    margin: 1.2963vh 0px 0.7407vh 0px;
  
  }
  .territory_list_title span{
    color: rgba(255, 255, 255, 0.35);
    font-size: 1.2963vh;
  }
  
  .buttons_section{
  
   
  }
  
  .card_img{
    width: 5.5556vh;
    height: 4.1667vh;
    margin: 0 auto;
  }
  .header{
    display: flex;
  }
  
  .titles{
    display: flex;
    align-items: center;
  }
  
  .active_territory{
    display: flex;
    justify-content: space-between;
  
  }
  
  .buttons button:hover {
  background-color: rgba(255, 255, 255, 0.15);
  }
  
  .territories::-webkit-scrollbar-thumb
  {
    border-radius: 0.7813vw;
    background-color: #F5F5F5;
  
  }
  
  .findUser{
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
    margin-bottom: 1.2037vh;
  }
  
  .territory_img{
    width: 100%;
    height: 100%;
  }


  .card{
    
    background-color:rgba(255, 255, 255, 0.07) ;
    padding: 0.3704vh 0.463vh 0.5556vh 0.463vh;
    border-radius: 0.8333vh;
    
  }

  
  .territory_title{
    font-size: 1.1963vh;
    margin-top: 0.5556vh;
    text-align: center;
  
  }
  
 
  
  
  
  .wrapper{
    display: flex;
      flex-direction: column;
      height: fit-content;
      margin-left: 1.6667vh;
      background-color: rgba(0, 0, 0, 0.15);
      width: 100%;
      padding: 1.8519vh 1.8519vh 0.9259vh 1.8519vh;
      border-radius: 1.3889vh;
  }
  
   
  
  
  
  </style>