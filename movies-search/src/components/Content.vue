<template>
  <div class="content">
    <h1>{{movieTitle}}</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">title</th>
          <th scope="col">year</th>
          <th scope="col">age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies" :key="movie.id">
          <th scope="row">{{movie.id}}</th>
          <td>{{movie.name}}</td>
          <td>{{movie.year}}</td>
          <td>{{movie.age}}</td>
        </tr>
      </tbody>
    </table>
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
      const data = await fetch('http://localhost:8080/catalog.json')
      this.movies = await data.json()
    }
  }
}
</script>
