import Vue from 'vue'
import Vuex from 'vuex'
import apiCall from '@/utils/api'

Vue.use(Vuex)

export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_ERROR = 'USER_ERROR'

export default new Vuex.Store({
  state: { token: localStorage.getItem('user-token') || '', status: '', hasLoadedOnce: false },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
    [AUTH_REQUEST]: (state) => {
      state.status = 'loading'
    },
    [AUTH_SUCCESS]: (state, resp) => {
      state.status = 'success'
      console.log(resp.success.token)
      state.token = resp.success.token
      state.hasLoadedOnce = true
    },
    [AUTH_ERROR]: (state) => {
      state.status = 'error'
      state.hasLoadedOnce = true
    },
    [AUTH_LOGOUT]: (state) => {
      state.token = ''
    }
  },
  actions: {
    [AUTH_REQUEST]: async ({commit, dispatch}, user) => {
      commit(AUTH_REQUEST)
      try {
        const response = await apiCall({ url: 'login', method: 'POST', data: user })
        localStorage.setItem('user-token', response.success.token)
        commit(AUTH_SUCCESS, response)
        dispatch(USER_REQUEST)
      } catch (error) {
        commit(AUTH_ERROR, error)
        localStorage.removeItem('user-token')
        throw Error(error.message);
      }
  },
  [AUTH_LOGOUT]: ({commit}) => {
      commit(AUTH_LOGOUT)
      localStorage.removeItem('user-token')
    }
  },

  [USER_REQUEST]: async ({commit, dispatch}) => {
    commit(USER_REQUEST)
    try {
      const response = await apiCall({url: 'profile'})
      commit(USER_SUCCESS, response.user)
    } catch (error) {
      commit(USER_ERROR)
      dispatch(AUTH_LOGOUT)   
    }
  },
})
