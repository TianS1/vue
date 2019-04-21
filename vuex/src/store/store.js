import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store=new Vuex.Store({
  state:{
    data:[
      {"name":"马云","price":200},
      {"name":"马云2","price":200},
      {"name":"马云3","price":200}
    ]
  },
  getters:{
    sel:(state)=>{
      var sel=state.data.map(
        pro=>{
          return{
            name:"*"+pro.name+"*",
            price:pro.price / 2
          }
        }
      );
      return sel;
    }
  },
  mutations:{
    down:(state,payloada) => {
      //setTimeout(function () {
        state.data.forEach(pro=>{
          pro.price-=payloada;
        })
     // },2000)
    }
  },
  actions:{
    down:(context,payloada) => {
      setTimeout(function () {
      context.commit("down",payloada);
      },2000);
    }
  }
})
