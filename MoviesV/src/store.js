///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   28.05.2020             //
//                                   //
///////////////////////////////////////

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isAuthenticated: false
}

const mutations = {
  login(state) {
    state.isAuthenticated = true;
  },
  logout(state) {
    state.isAuthenticated = false;
  }
}

const actions = {
  login: ({ commit }) => commit('login'),
  logout: ({ commit }) => commit('logout')  
}

const getters = {  
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})