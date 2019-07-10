<template>
  <div>
    <cajero/>
  </div>
</template>

<script>
import Cajero from './components/Cajero.vue'

export default {
  name: 'app',
  components: {
    Cajero
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  body {
    margin: 0;

    font-family: "Source Sans Pro", sans-serif;

    background-color: #2a333d;
}
</style>
