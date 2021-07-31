<template>
  <div id="root">
    <div v-for="p in products" :key="p.id">
      <a :href="p.url" :class="productClass(p.stocked)" v-text="p.name"></a
      ><font-awesome-icon :icon="['fas', iconProductClass(p.stocked)]" />
    </div>
    <div>
      <p v-html="htmlCode"></p>
      <input type="text" @keypress="onKeyPressEvent($event)" />
    </div>
    <div>
      <p v-once v-text="quantidadeEstoqueInicial"></p>
      <p v-text="quantidadeEstoqueAtualizado"></p>
      <button @click="byePikachu" v-text="textPikachu"></button>
      <img v-show="showPikachu" src="../assets/pikachu.jpg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Sabão em Pó',
          mark: 'Omo',
          price: 10.75,
          url: 'https://lolja.com.br/produtos/12345',
          stocked: true
        },
        {
          id: 2,
          name: 'Sabão em Barra',
          mark: 'Omo',
          price: 11.75,
          url: 'https://lolja.com.br/produtos/12345',
          stocked: false
        },
        {
          id: 3,
          name: 'Sabão em Líquido',
          mark: 'Omo',
          price: 11.75,
          url: 'https://lolja.com.br/produtos/12345',
          stocked: false
        }
      ],
      htmlCode: '<strong>Captura Teclas Pressionadas</strong>',
      stock: 3,
      showPikachu: true,
      textPikachu: 'Bye Pikachu'
    }
  },
  computed: {
    quantidadeEstoqueInicial(): string {
      return `Estoque inicial ` + this.stock
    },
    quantidadeEstoqueAtualizado(): string {
      return `Estoque atualizado ` + this.stock
    }
  },
  methods: {
    productClass(stocked: boolean): string {
      if (stocked) return 'product-title-stocked'
      else return 'product-title-not-stocked'
    },
    iconProductClass(stocked: boolean): string {
      if (stocked) return 'check'
      else return 'times'
    },
    onKeyPressEvent(value: KeyboardEvent) {
      alert('Voce pressionou a tecla ' + value.key)
      this.stock++
    },
    byePikachu() {
      this.showPikachu = !this.showPikachu
      this.textPikachuDynamic()
    },
    textPikachuDynamic() {
      if (this.showPikachu) this.textPikachu = 'Bye Pikachu'
      else this.textPikachu = 'Welcome Pikachu'
    }
  }
})
</script>

<style lang="scss" scoped>
.product-title {
  color: indigo;
  background: chocolate;

  &-stocked {
    color: green;
  }

  &-not-stocked {
    color: red;
  }
}
</style>
