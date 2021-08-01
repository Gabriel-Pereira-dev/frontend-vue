<template>
  <div class="container">
    <form class="login">
      <h1>Faça seu Login!</h1>
      <input type="text" placeholder="Login" class="login__text-field" />
      <input type="password" placeholder="Senha" class="login__text-field" />
      <button class="login__button-submit" type="submit">Acessar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: minmax(400px, 500px);
  background-color: lightsalmon;
  justify-content: center;
  align-content: center;
}
.login {
  background-color: #89cff0;
  padding: 2rem;
  border-radius: 5px;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  //justify-items: center;
  &__button-submit {
    margin-top: 0.5rem;
    width: 100px;
    justify-self: end;
    border-radius: 5px;
    border: 1px solid #eee;
  }

  &__text-field {
    justify-self: center;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #eee;
  }
}
</style>
