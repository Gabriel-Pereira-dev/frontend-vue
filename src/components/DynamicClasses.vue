<template>
  <div>
    <button class="static" :class="{ active: isActive }">Ta Ativo?</button>
    <button :class="['static', { danger: hasError }]">Tem Erro?</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isActive: true,
      hasError: true
    }
  }
})
</script>
<style lang="scss" scoped>
.active {
  background-color: darken($color: red, $amount: 0.5);
}
.danger {
  background-color: lighten($color: royalblue, $amount: 0.5);
}
</style>
