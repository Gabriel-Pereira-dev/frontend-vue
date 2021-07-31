<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <transition name="cataline" appear>
      <h1 v-if="show">Cataline</h1>
    </transition>
    <transition
      appear
      mode="out-in"
      enter-active-class="animate__animated animate__lightSpeedInLeft"
      leave-active-class="animate__animated animate__lightSpeedOutLeft"
      @before-enter="beforeEnter"
      @enter="enter"
      :css="true"
    >
      <h1 v-if="!show">Katalyni</h1>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'

export default defineComponent({
  data() {
    return {
      show: false
    }
  },
  methods: {
    beforeEnter(element: HTMLElement) {
      element.classList.add('b-enter')
    },
    enter(element: HTMLElement) {
      element.classList.add('b-leave')
    }
  }
})
</script>

<style scoped>
/* 
v-enter-from (de onde estar vindo)
v-enter-active (como vai acontecer)
v-enter-to (para onde está indo)

v-leave-from (de onde estar vindo)
v-leave-active (como vai acontecer)
v-leave-to (para onde está indo)

O nome inicial `v` depende do atributo `name`
*/
.b-enter {
  background-color: indigo;
}

.b-leave {
  background-color: blueviolet;
}
.cataline-enter-from,
.cataline-leave-to {
  opacity: 0;
}
.cataline-enter-active,
.cataline-leave-active {
  transition: opacity 2s;
}
</style>
