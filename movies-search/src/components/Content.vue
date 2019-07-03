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
          <th>{{movie.Title}}</th>
          <th>{{movie.Year}}</th>
          <th>{{movie.Age}}</th>
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
    if ( localStorage.getItem( 'movies' ) ) {
      try {
        this.movies = JSON.parse( localStorage.getItem( 'movies' ) )
        // eslint-disable-next-line
        console.log( 'movies obtenidas de localStorage' )
      } catch( error ) {
        localStorage.removeItem( 'movies' )
        this.loadCatalog().catch( e => alert( e.message ) )
      }
    } else {
      this.loadCatalog().then( () => this.saveMovies() ).catch( e => alert( e.message ) )
    }
  },
  methods: {
    loadCatalog: async function() {
      try {
        const data = await fetch( 'http://localhost:8080/catalog.json' )
        this.movies = await data.json()
      } catch ( error ) {
        throw error
      }
    },
    saveMovies() {
      const parsed = JSON.stringify( this.movies )
      localStorage.setItem( 'movies', parsed )
    }
  }
}
</script>
