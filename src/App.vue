<template>
  <div>
    <SlotTag>
      <template v-slot:top="{ list }"> topn slot {{ list }} </template>
    </SlotTag>
    <div ref="divRef">window size -> {{ width }}:{{ height }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SlotTag from './components/VSlots.vue'
import useWindowSize from './uses/useWindowSize'
import useRect from './uses/useRect'
export default {
  name: 'App',
  components: {
    SlotTag,
  },
  setup() {
    const inputRef = ref('inputRef')
    const divRef = ref(null)
    const { width, height } = useWindowSize()
    const div = useRect(divRef)

    return {
      inputRef,
      width,
      height,
      divRef,
    }
  },
}
</script>
