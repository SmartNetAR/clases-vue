import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import store from './store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login'),
      beforeEnter: ifNotAuthenticated,
    },
    {
        path: '/signin',
        name: 'signIn',
        component: () => import('./views/SignIn'),
        beforeEnter: ifNotAuthenticated,
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('./views/About.vue'),
        beforeEnter: ifAuthenticated
    }
  ]
})
