<template>
  <div class="container">
    <nav class="menu">
      <div class="logo">Cataline</div>
      <ul class="navigation">
        <li class="navigation__item">Inicio</li>
        <li class="navigation__item">Jornadas</li>
        <li class="navigation__item">Blogs</li>
        <li class="navigation__item">Login</li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.container {
  height: 100% !important;
  width: 100%;
  display: grid;
  grid-template-columns: 600px;
  grid-template-rows: auto;
  align-content: center !important;
  justify-content: center;
}
.menu {
  background-color: mediumvioletred;
  display: grid;
  border-radius: 5px;
  grid: auto 1fr / 200px auto;
  padding: 0.5rem 1rem;
  align-items: center;
}
.logo {
  font-weight: bold;
  text-transform: uppercase;
}
.navigation {
  list-style: none;
  display: grid;
  grid: 1fr / auto;
  grid-auto-flow: column;
  column-gap: 1.5rem;
  justify-content: end;
}
</style>
