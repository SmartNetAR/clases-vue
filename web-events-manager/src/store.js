import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false
  },
  getters: {
    isAuthenticated: function () {
      return this.state.authenticated;
    }
  },
  mutations: {

  },
  actions: {

  }
})
