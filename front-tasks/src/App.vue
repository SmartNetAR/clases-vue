<template>
  <div id="app">
    <TasksList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TasksList from './components/TasksList.vue'

export default {
  name: 'app',
  components: {
    TasksList
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    getTasks: async function() {
      try {
        const data = await fetch('http://localhost:8000/api/tasks');
        this.tasks = await data.json();
      } catch (error) {
        throw error;
      }

    }
  },
  mounted() {
    this.getTasks();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
