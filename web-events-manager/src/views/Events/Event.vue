<template>
  <div class="Event">
    <div class="card text-center"  >
      <div class="card-header">{{eventSearched.event.name}}</div>
      <div class="card-body">
        <h5 class="card-title">{{eventSearched.event.description}}</h5>
        <p class="card-text">{{eventSearched.event.large_description}}</p>
        <p>${{eventSearched.event.price}}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      <div class="card-footer text-muted">{{eventSearched.event.date_time}}</div>
    </div>
    <comments :list='id'/>
  </div>
</template>
<script>
import comments from './comments.vue'
export default {
    name: 'Event',
    components :
    {
      comments
    },
  data() {
    return {
      id: this.$route.params.id,
      eventSearched: { event: [] },
    };
  },
  watch: {
    $route(to) {
      this.id = to.params.id; //saco el id del parametro de la ruta..
    }
  },
  mounted() {
    this.showEvent();
  },

  methods: {
    showEvent: async function() {
      const Url = "http://localhost:8000/api/events/"+this.id;
      const settings = {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      try {
        const data = await fetch(Url, settings);
        this.eventSearched = await data.json();
      } catch (error) {
        throw error;
      }
    }
  },
 // computed: {
   // searchEvent() {
     // return this.eventsAndComments.events.filter(event => event.id == this.id);
    //}
 // }
};
</script>



