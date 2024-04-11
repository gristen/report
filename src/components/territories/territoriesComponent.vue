
<template>
  <div class="wrapper relative">
    <h1 class="control_title">Управление бизнесами</h1>
    <div class="header">
      <input type="text" class="full-width-input create_territory" placeholder="Введите ID бизнеса"> 
    </div>
    <div class="active_territory">
      <div class="card">
        <div class="card_img">
          <img class="territory_img" src="../../assets/territories/buisenes.svg" alt="">
        </div>
        <p class="territory_title">АЗС с 24/7 #6767</p>
        <button class="territory_button">Телепорт</button>
      </div>
      <div class="characteristics">
        <h1 class="request">По вашему запросу найден: <br> <span>АЗС с 24/7 #6765</span> </h1>
        <p>какая-то характеристика <span>$value$</span></p>
        <p>какая-то характеристика <span>$value$</span></p>
        <p>какая-то характеристика <span>$value$</span></p>
        <p>какая-то характеристика <span>$value$</span></p>
      </div>
      <div class="buttons_section">
        <h1>бизнес крышует</h1>
        <div class="buttons grid grid-cols-2">
          <button class="active">Russian mafia</button>
          <button v-for="i in 5" :key="i" class="">Russian mafia</button>
        </div>
      </div>
    </div>
    <h1 class="territory_list_title">Управление территориями гетто</h1>
    <input type="text" class="full-width-input create_territory" placeholder="Введите ID территории"> 
    <div class="managment_getto">
      <div class="card">
        <div class="card_img">
          <img class="territory_img" src="../../assets/territories/geto.svg" alt="">
        </div>
        <p class="territory_title">Территория №55</p>
        <button class="territory_button">Телепорт</button>
      </div>
      <div class="characteristics">
        <h1 class="request">По вашему запросу найден: <br> <span>Территория №55</span> </h1>
        <p>какая-то характеристика <span>$value$</span></p>
        <p>какая-то характеристика <span>$value$</span></p>
        <p>какая-то характеристика <span>$value$</span></p>
        <p>какая-то характеристика <span>$value$</span></p>
      </div>
      <div class="buttons_section">
        <h1>Территория под контролем</h1>
        <div class="buttons grid grid-cols-2">
          <button class="active">Los Santos Vagos</button>
          <button v-for="i in 5" :key="i" class="">Los Santos Vagos</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 
</script>
<style scoped>
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
.characteristics p{
  font-size: 1.1111vh;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.3481vh;
  margin-bottom: 0.8333vh;
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

.active_territory{
  display: flex;

}

.buttons button:hover {
background-color: rgba(255, 255, 255, 0.15);
}

.territories::-webkit-scrollbar-thumb
{
  border-radius: 0.7813vw;
  background-color: #F5F5F5;

}

.create_territory{
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
}
.title{
color: white;
margin-top: 1.3889vh;
margin-bottom: 1.3889vh;
font-size: 1.2963vh;

}
.territories{
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
  margin-right: 1.4815vh;
}
.territory_title{
  font-size: 1.1963vh;
  margin-top: 0.5556vh;

}
.territory_button{
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
.territory_button:hover{
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
    height: fit-content;
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