import { createApp } from 'vue'
import App from './App.vue'
import color from '@/directives/color'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('color', color)
app.mount('#app')
