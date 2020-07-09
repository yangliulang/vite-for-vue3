<template>
  <BScroll />
  <CurrentInstance />
</template>
<script>
import CurrentInstance from '../components/CurrentInstance.vue'
import BScroll from '../components/BScroll.vue'
export default {
  name: 'Home',
  components: {
    CurrentInstance,
    BScroll,
  },
}
</script>
