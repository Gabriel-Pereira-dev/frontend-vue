<template>
  <div id="root">
    <div class="container">
      <form>
        <div>
          <input
            type="text"
            placeholder="Nome"
            v-model="name"
            v-color:color.lime="'red'"
          />
        </div>
        <div>
          <input
            v-color:a.lime="'red'"
            type="number"
            placeholder="Idade"
            v-model.number="age"
          />
        </div>
        <div>
          <textarea rows="3" placeholder="Descrição" v-model="message" />
        </div>
        <div>
          <input type="checkbox" v-model="newsletter" />Newsletter<br />
        </div>
        <div>
          <input type="radio" name="color" value="azul" v-model="color" />Azul
          <input type="radio" name="color" value="roxo" v-model="color" />Roxo
          <input
            type="radio"
            name="color"
            value="magenta"
            v-model="color"
          />Magenta
        </div>
        <select v-model="fruit">
          <option disabled selected>Seleciona uma fruta</option>
          <option value="goiaba">Goiaba</option>
          <option value="maca">Maçã</option>
          <option value="banana">Banana</option>
        </select>
      </form>
    </div>
    <p>Nome: {{ name }}</p>
    <p>Idade: {{ age }}</p>
    <p>Mensagem: {{ message }}</p>
    <p>Newsletter: {{ newsletter }}</p>
    <p>Cor: {{ color }}</p>
    <p>Fruta: {{ fruit }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: '',
      age: 0,
      message: '',
      newsletter: false,
      color: '',
      fruit: ''
    }
  }
})
</script>

<style lang="scss" scoped>
nput[type='email'],
input[type='text'],
select,
textarea {
  display: block;
}

form {
  padding-bottom: 1rem;
  border-bottom: 2px solid #000;
}
</style>
