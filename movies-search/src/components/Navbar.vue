<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand">{{title}}</a>
      <form class="form-inline" v-on:submit.prevent="search">
        <input v-model="titleSearch" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['title'],
  data() {
    return {
      titleSearch: ''
    }
  },
  methods: {
    search() {
      this.$emit('search-movie-title', this.titleSearch)
    }
  }
}
</script>