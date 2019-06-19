<template>
  <div class="content">
    <h1>{{movieTitle}}</h1>
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
    loadCatalog: async function() {
      const data = await fetch('./catalog.json')
      this.movies = await data.json()
    }
  }
}
</script>
