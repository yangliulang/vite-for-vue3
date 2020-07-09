<template>
  <div>about page:{{ route.query }}</div>
</template>
<script>
import { useRoute } from 'vue-router'
export default {
  name: 'About',
  setup() {
    const route = useRoute()
    // console.log('route', route)
    return {
      route,
    }
  },
}
</script>
