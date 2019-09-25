<template>
  <div>
    <p>lista de tareas</p>
    <pre>
      {{tasks}}
    </pre>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th scope="col">Estado</th>
          <th scope="col">Operaciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks.tasks" :key="task.id">
          <th scope="row">{{task.id}}</th>
          <td>{{task.name}}</td>
          <td>{{task.description}}</td>
          <td>{{task.status}}</td>
          <td>
            <button class="btn btn-secondary" @click="edit(task.id)">Editar</button>
            <button class="btn btn-danger">Eliminar</button>
          
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
  data() {
    return {

    }
  },
  methods:{
    edit: function (id) {
      alert("tarea " + id);
    }
  } 
    
}
</script>