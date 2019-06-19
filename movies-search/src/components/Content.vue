<template>
  <div class="content">
    <h1>{{movieTitle}}</h1>
    <h2>evento</h2>
    <button class="btn btn-primary" @:click="saludar">test</button>
  </div>
</template>

<script>
export default {
  props: ['movieTitle'],
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    this.loadCatalog()
  },
  methods: {
    saludar() {
      console.log("hola")
    },
    loadCatalog: async function() {
      const data = await fetch('./catalog.json')
      this.movies = await data.json()
    }
  }
}
</script>
