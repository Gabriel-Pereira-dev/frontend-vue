<template>
  <transition-group
    enter-active-class="animate__animated animate__rollIn"
    leave-active-class="animate__animated animate__rollOut"
    appear
  >
    <h1
      v-for="f in frameworks"
      :key="f.id"
      v-text="f.name"
      v-show="f.show"
      @click="f.show = !f.show"
    ></h1>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      frameworks: [
        {
          id: 1,
          name: 'Vue',
          show: true
        },
        {
          id: 2,
          name: 'Angular',
          show: true
        },
        {
          id: 3,
          name: 'React',
          show: true
        }
      ]
    }
  }
})
</script>

<style scoped></style>
