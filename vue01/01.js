const app = new Vue({
  el: "#app",
  data: {
    titulo: "hola vue.js",
    alumnos: [
      {nombre: 'leo', edad: 30, mayor: "si"},
      {nombre: 'nico', edad: 6, mayor: "no"},
      {nombre: 'maria', edad: 20, mayor: "si"},
    ]
  }
})