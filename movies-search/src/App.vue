<template>
  <div>
    <Navbar :title="titulo" v-on:search-movie-title="searchMovie"></Navbar>
    <Content v-bind:movie-title="movieTitleToSearch"></Content>
    <!-- <HelloWorld :msg="titulo"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Navbar,
    Content
  },
  data() {
    return {
      titulo: 'my movies app',
      movieTitleToSearch: ''
    }
  },
  methods: {
    searchMovie: function (title) {
      // alert(title)
      this.movieTitleToSearch = title
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
