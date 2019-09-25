<template>
  <div>
    <h1>Nueva Tarea</h1>
    <button class="btn btn-primary" @click="saveTask()">Guardar</button>
  </div>
</template>

<script>
export default {
  name: 'NewTask',
  data() {
    return {
      newTaskCreated: {
        name: 'tarea 6',
        description: 'creada desde vue.js',
        priority: 1,
        status: 0,
      }
    }
  },
  methods: {
    saveTask: async function() {
      const url = 'http://localhost:8000/api/tasks'
      const settings = {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.newTaskCreated)
      }
      try {
        const response = await fetch(url, settings)
        const json = await response.json()
        if (response.status !== 200) throw Error(json.error);
        return json;
      } catch (error) {
        throw Error(error);
      }
    }
  }
}
</script>