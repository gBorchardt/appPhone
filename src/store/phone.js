import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    models: [],
    phone: []
  },
  mutations: {
    setModels(state, models){
      state.models = models
    },
    setPhone(state, phone){
      state.phone = phone
    }
  },
  actions: {
    fetchModels({
      commit
      }) {
        axios
          .get('http://vesasistemas.com.br/madeira/modelos')
          .then(response => {
            let results = response.data
          commit('setModels', results)
      });
    },
    filterPhone({commit}, {val1, val2})
    {
        axios
        .get("http://vesasistemas.com.br/madeira/celular?idModelo=" + val1 + "&cor=" + val2)
        .then(response => {
          let results = response.data
          commit('setPhone', results)
      });      
    }   
  }
})
