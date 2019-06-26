<template>
  <div class="container">
    <h3 class="my-10">Este es el componente de ejemplo con el título {{tituloEjemplo}}</h3>



    <h2>Lista de alumnos</h2>
    <ol class="list-group my-3">
      <li class="list-group-item" v-for="(alumno, index) in Alumnos" v-bind:key="index">
        {{alumno.name}} tiene {{alumno.edad}} años
      </li>
    </ol>


    <h2>Lista de alumnos aprobados</h2>
    <ol class="list-group my-3">
      <li class="list-group-item" v-for="(alumno, index) in alumnosAprobados" v-bind:key="index">
        {{alumno.name}} tiene {{alumno.edad}} años
      </li>
    </ol>


    <h2>Lista de alumnos desaprobados</h2>
    <ol class="list-group my-3">
      <li class="list-group-item" v-for="(alumno, index) in alumnosDesaprobados" v-bind:key="index">
          {{alumno.name}} tiene {{alumno.edad}} años
      </li>
    </ol>


    <h2>Lista de alumnos menores de edad (18 años)</h2>
    <ol class="list-group my-3">
      <li class="list-group-item" v-for="(alumno, index) in alumnosMenores" v-bind:key="index">
        {{alumno.name}} tiene {{alumno.edad}} años
      </li>
    </ol>


  </div>

</template>

<script>
export default {
  name: 'Ejemplo',
  props: {
    tituloEjemplo: String
  },
  data() {
    return {
      Alumno: "Leo",
      Alumnos: [
        {name: 'Juan', edad: 18, aprobado: false},
        {name: 'María', edad: 17, aprobado: true},
        {name: 'Martín', edad: 21, aprobado: true},
      ]
    }
  },
  computed: {
    alumnosMenores: function () {
      return this.Alumnos.filter( alumno => alumno.edad < 18)      
    },
    alumnosAprobados() {
      return this.Alumnos.filter( alumno => alumno.aprobado )
    },
    alumnosDesaprobados() {
      const desaprobados = []
      
      for (let i = 0; i < this.Alumnos.length; i++ ) {
        if ( !this.Alumnos[i].aprobado ) {
          desaprobados.push( this.Alumnos[i] )
        }
      }
      return desaprobados
    }
  }
}
</script>
