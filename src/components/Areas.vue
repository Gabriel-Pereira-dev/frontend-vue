<template>
  <div class="root">
    <div class="container">
      <div class="container__header">Cabeçalho</div>
      <div class="container__content">Conteudo</div>
      <div class="container__footer">Rodapé</div>
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
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  grid:
    'container__header' 100px
    'container__content' 200px
    'container__footer' 100px
    / auto;

  grid-template-areas:
    'container__content container__content container__header'
    'container__content container__content .'
    'container__content container__content  .'
    'container__footer container__footer container__footer'
    'container__footer container__footer container__footer';
  //grid-auto-flow: row;

  &__header {
    grid-area: container__header;
    background-color: chartreuse;
    margin: 0px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
  }
  &__content {
    grid-area: container__content;
    background-color: chartreuse;
    margin: 0px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
  }
  &__footer {
    grid-area: container__footer;
    background-color: chartreuse;
    margin: 0px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
  }
}
</style>
