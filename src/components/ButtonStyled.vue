<template>
  <button
    @click="$emit('passarinho', 'calopsita')"
    :class="['button-styled', 'button-styled-' + buttonClass]"
  >
    <slot name="before" />
    {{ val }}
    <slot name="after" />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type buttonClasses = 'primary' | 'success' | 'danger'

interface User {
  id: number
  name: string
  age: number
}

export default defineComponent({
  props: {
    text: {
      type: [String, Number],
      required: true
    },
    buttonClass: {
      type: String,
      default: 'primary',
      validator: (value: buttonClasses) => {
        return ['primary', 'success', 'danger'].includes(value)
      }
    },
    user: {
      type: Object as PropType<User>,
      required: true
    }
  },
  data() {
    return {
      val: this.user.name
    }
  }
})
</script>

<style lang="scss" scoped>
.button-styled {
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;

  &-primary {
    background-color: #2d6cea;
    color: #fff;
  }
  &-danger {
    color: indigo;
    background-color: lighten($color: red, $amount: 10);
  }

  &-success {
    color: aqua;
    background-color: lighten($color: green, $amount: 10);
    border-radius: 0.3rem;
  }
}
</style>
