<template>
  <div>
    <TasksList :tasks="tasksList"/>
    <NewTask/>
  </div>
</template>

<script>
import TasksList from './components/TasksList.vue'
import NewTask from './components/NewTask.vue'

export default {
  name: 'app',
  components: {
    TasksList,
    NewTask
  },
  data() {
    return {
      tasksList: [],
    }
  },
  methods: {
    getTasks: async function() {
      try {
        const data = await fetch('http://localhost:8000/api/tasks');
        this.tasksList = await data.json();
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
