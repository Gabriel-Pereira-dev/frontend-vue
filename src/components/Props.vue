<template>
  <div>
    <div>
      Done Todos
      <h1 v-for="todo in doneTodos" :key="todo.text">
        {{ todo.text }}
        <button @click="changeDoneTodo(todo)">Concluir todo</button>
      </h1>
    </div>
    <div>
      Undone Todos
      <h1 v-for="todo in undoneTodos" :key="todo.text">
        {{ todo.text }}
        <button @click="changeDoneTodo(todo)">Concluir todo</button>
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Todo {
  text: string
  done: boolean
}
export default defineComponent({
  data() {
    return {
      todos: [] as Todo[]
    }
  },
  computed: {
    doneTodos(): Todo[] {
      return this.todos.filter((t) => t.done)
    },
    undoneTodos(): Todo[] {
      return this.todos.filter((t) => !t.done)
    }
  },
  methods: {
    changeDoneTodo(todo: Todo): Todo {
      todo.done = !todo.done
      return todo
    }
  },
  created() {
    this.todos = [
      { text: 'Estudar Typescript', done: true },
      { text: 'Lavar os pratos', done: false },
      { text: 'Aprender Nuxt.js', done: true }
    ]
  },
  watch: {
    todos: {
      handler(newValue: Todo[]) {
        const isAllDone = newValue.every(({ done }) => done)
        const isAllUndone = newValue.every(({ done }) => !done)
        if (!isAllDone && !isAllUndone) {
          alert('Changing values')
        } else {
          if (isAllDone) {
            alert('Is All done')
          }
          if (isAllUndone) {
            alert('Is All undone')
          }
        }
      },
      deep: true
    }
  }
})
</script>
