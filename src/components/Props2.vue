<template>
  <div>
    <h1>Hello {{ nomeCompleto }}</h1>
    <h1>{{ contagem }}</h1>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
    <button @click="zerar">ZERAR</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Pessoa {
  nome: string
  sobrenome: string
  idade: number
}
export default defineComponent({
  data() {
    return {
      pessoa: { nome: 'Gabriel', idade: 20, sobrenome: 'Pereira' } as Pessoa,
      contagem: 0
    }
  },
  computed: {
    nomeCompleto(): string {
      return `${this.pessoa.nome}  ${this.pessoa.sobrenome} ${this.pessoa.idade}`
    }
  },
  methods: {
    incrementar() {
      this.contagem++
    },
    decrementar() {
      this.contagem--
    },
    zerar() {
      this.contagem = 0
    }
  }
})
</script>
