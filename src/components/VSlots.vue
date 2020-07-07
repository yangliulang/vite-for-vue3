<template>
  <div>
    <slot name="top" :list="list"></slot>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'VSlots',
  setup() {
    const list = ref(['yellow', 'red', 'green'])
    return {
      list,
    }
  },
}
</script>
