<template>
  <div class="root">
    <div class="container">
      <div class="container__item"></div>
      <div class="container__item"></div>
      <div class="container__item"></div>
      <div class="container__item"></div>
      <div class="container__item"></div>
      <div class="container__item"></div>
      <div class="container__item"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.root {
  background: violet;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  margin: 2rem;
  font-family: sans-serif;
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  grid-auto-rows: 150px;
  row-gap: 1rem;
  column-gap: 1rem;
  //grid-auto-flow: row;

  &__item {
    background-color: chartreuse;
    height: auto;

    margin: 0px;
    border: 1px solid black;
    border-radius: 5px;
    // grid-auto-rows: minmax(100px, 200px);
    // grid-auto-columns: minmax(100px, 200px);
  }
}
</style>
