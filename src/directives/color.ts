import { Directive } from 'vue'

const color: Directive = {
  beforeMount(el: HTMLElement, binding) {
    if (binding.arg === 'color') el.style.color = binding.value
    else el.style.backgroundColor = binding.value
  }
}

export default color
