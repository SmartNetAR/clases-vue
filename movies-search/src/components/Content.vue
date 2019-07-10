<template>
  <div class="content">
    <h1>Resultados de {{movieTitle}}</h1>
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
        <tr v-for="movie in filteredMovies" :key="movie.id">
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
  },
  computed: {
    filteredMovies() {
      // return this.movies.filter( movie => movie.Title == this.movieTitle)

      /*    
      The indexOf() method returns the position of the first occurrence of a specified value in a string.
      This method returns -1 if the value to search for never occurs.
      Note: The indexOf() method is case sensitive. 
      https://www.w3schools.com/jsref/jsref_indexof.asp
      */
      return this.movies.filter( (movie) =>
        movie.Title.toLowerCase().indexOf(this.movieTitle.toLowerCase()) > -1
      )
    }
  }
}
</script>
