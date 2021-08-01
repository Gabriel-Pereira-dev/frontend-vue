<template>
  <ButtonStyled
    :text="'Aperte Aqui!'"
    :buttonClass="'primary'"
    :user="usuario"
    @passarinho="shock($event)"
    ><template v-slot:after> <font-awesome-icon icon="laptop" /> </template
  ></ButtonStyled>
  <select v-model="currentView">
    <option value="Props">Props1</option>
    <option value="Props2">Props2</option>
    <option value="Directives">Directives1</option>
    <option value="Directives2">Directives2</option>
    <option value="Lifehooks">Lifehooks</option>
    <option value="DynamicClasses">DynamicClasses</option>
    <option value="Transitions">Transitions</option>
    <option value="TransitionGroup">TransitionGroup</option>
    <option value="CSSGridLayout">CSSGridLayout</option>
    <option value="Areas">Areas</option>
    <option value="Menu">Menu</option>
    <option value="Login">Login</option>
  </select>
  <transition
    appear
    mode="out-in"
    enter-active-class="animate__animated animate__rollIn"
    leave-active-class="animate__animated animate__rollOut"
  >
    <component :is="currentView" />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Login from '@/components/Login.vue'
import Menu from '@/components/Menu.vue'
import Areas from '@/components/Areas.vue'
import CSSGridLayout from '@/components/CSSGridLayout.vue'
import TransitionGroup from '@/components/TransitionGroup.vue'
import Transitions from '@/components/Transitions.vue'
import DynamicClasses from '@/components/DynamicClasses.vue'
import ButtonStyled from '@/components/ButtonStyled.vue'
import { User } from '@/modules/User'
import Directives2 from '@/components/Directives2.vue'
import Directives from '@/components/Directives.vue'
import Props from '@/components/Props.vue'
import Props2 from '@/components/Props2.vue'
import LifeHooks from '@/components/LifeHooks.vue'

export default defineComponent({
  components: {
    Login,
    Menu,
    Areas,
    CSSGridLayout,
    TransitionGroup,
    Transitions,
    DynamicClasses,
    ButtonStyled,
    Directives2,
    Directives,
    Props,
    Props2,
    LifeHooks
  },
  data() {
    return {
      usuario: {
        id: 1,
        name: 'Gabriel',
        age: 20
      } as User,
      currentView: 'Prop'
    }
  },
  methods: {
    shock(event: string) {
      alert('shock ' + event)
    }
  }
})
</script>
<style lang="scss" scoped></style>
