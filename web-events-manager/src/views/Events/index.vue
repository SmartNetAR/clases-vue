<template>
    <div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Place</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Capacity</th>
    </tr>
  </thead>
  <tbody>
      
    <tr v-for="item in events.events" :key="item.place">
      <th scope="row">{{evemts.place}}</th>
      <td>{{events.name}}</td>
      <td>{{events.description}}</td>
      <td>{{events.price}}</td>
      <td>{{events.capacity}}</td>
    </tr>
  </tbody>
</table>

    </div>
</template>

<script>
import apiCall from '@/utils/api'
export default {
    name: 'Eventslist',
    data() {
        return{
            events:[],
        }
    },
mounted() {
    this.getAllEvents()     
},
methods: {
    getAllEvents: async ( ) => {
      try {
        const response = await apiCall({url: 'events'})
        console.log(response)
        this.events = await response
        // commit( TEAM_SUCCESS, response.teams )
      } catch (error) {
        // commit ( TEAM_ERROR )
      }
    }
  }
}
</script>