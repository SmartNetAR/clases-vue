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
export default {
    name: 'Eventslist',
    data() {
        return{
            events:[],
        }
    },
mounted() {
    this.getEvents()     
},
methods: {
    getEvents: async function() {
    try {
        const data = await fetch('http://127.0.0.1:8000/api/events/')
        console.log(data)
        this.events = await data.json()
        console.log(this.events)
        }catch (error) {
        console.error(error)
        }
    }
}   
}
</script>