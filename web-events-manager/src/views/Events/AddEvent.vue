<template>
  <div>
    <button type="button" class="btn btn-primary">Crear Evento</button>
  </div>
</template>

<script>
export default {
  name: 'newEvent',
  data(){
    return{
      eventadded:[],
    }
  },
  methods:{
    saveEvent:async function(){
      const url = 'http://127.0.0.1:8000/api/events/'
      const settings = {
        methods
      }
    }
  }
}
</script>