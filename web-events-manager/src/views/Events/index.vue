<template>
  <div>
    <div class="row">
      <div class="col-sm-6" v-for="item in events.events" :key="item.place">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">{{item.place}}</p>
            <button @click='watchEvent(item.id)' class="btn btn-primary">Ver evento</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiCall from "@/utils/api";
export default {
  name: "Eventslist",
  data() {
    return {
      events: []
    };
  },
  mounted() {
    this.getAllEvents();
  },
  methods: {
    getAllEvents: async function() {
      const baseUrl = "http://localhost:8000/api/events";
      const settings = {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      try {
        const data = await fetch(baseUrl, settings);
        this.events = await data.json();
      } catch (error) {
        throw error;
      }
    },
    watchEvent(id){
      this.$router.push('/events/'+ id)
    }
  }
};
</script>