<template>
  <div>
    <div class="header">
      <img class="logo" src="../assets/logo.png" />
      <div class="align-left">
        <span id="nombre">Bienvenido/a</span>
        <img class="avatar" src="../assets/avatar.svg" />
      </div>
    </div>
    <div class="white-container">
      <div class="menu-container">
        <h1 class="tu-cuenta">Login</h1>
        <button class="links" @click="enter()">Entrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        name: 'nombre usuario', 
        pass: 'contraseña',
      },
    }
  },
  methods: {
    enter() {
      this.$emit('enter', this.user)
    }
  }
}
</script>

<style>
  .align-left {
      display: flex;
      padding: 8px;

      align-items: center;
  }
  .white-container {
      display: flex;
      width: 65%;
      padding: 30px;
      margin: 0 auto;
      box-sizing: border-box;

      border: 1px solid #979797;
      border-radius: 8px;
      background-color: #fff;

      justify-content: center;
  }
  .menu-container {
    display: block;
    width: 35%;
    padding-right: 20px;
  }
  .tu-cuenta {
    padding-left: 24px;
    margin: 0;
    margin-left: -30px;

    font-family: "Source Sans Pro";
    font-size: 32px;
    font-weight: normal;

    color: #2a333d;
    border-left: 6px solid #2cc197;
  }

</style>
