<template>
  <div class="container">
    <form class="form" @submit.prevent="signin">
      <h1>Sign in</h1>
      <div class="form-group">
        <label>User name</label>
        <input class="form-control" required v-model="name" type="text" placeholder="My name"/>
        <label>User email</label>
        <input class="form-control" required v-model="email" type="email" placeholder="yourvalid@email.com"/>
        <label>Country</label>
        <input class="form-control" required v-model="country" type="text" placeholder="My Country"/>
        <label>State</label>
        <input class="form-control" required v-model="state" type="text" placeholder="My State"/>
        <label>City</label>
        <input class="form-control" required v-model="city" type="text" placeholder="My City"/>
        <label>Password</label>
        <input class="form-control" required v-model="password" type="password" placeholder="Password"/>        
        <label>Confirm Password</label>
        <input class="form-control" required v-model="c_password" type="password" placeholder="Repeat Password"/>        
      </div>
      <button class="btn btn-primary" type="submit">Sign In</button>
      Do you already have an account in Events Manager? <router-link :to="{ name: 'login'}">Login</router-link>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  // import {AUTH_REQUEST} from 'actions/auth'

  export default {
    name: 'signIn',
    data () {
      return {
        name: '',
        email: '',
        country: '',
        state: '',
        city: '',
        password: '',
        c_password: '',
      }
    },
    methods: {
      ...mapActions([ 'ACCOUNT_CREATE' ]),

      signin: function () {
        const { name, email, country, state, city, password, c_password } = this
        this.ACCOUNT_CREATE( { name, email, country, state, city, password, c_password })
        .then(() => {
          this.$router.push('/')
        }).catch( (error) => {
          console.error(error.message)
          alert( error.message )
        })
      }
    },
  }
</script>