<template>
  <div @click="chan">{{ value }}</div>
</template>
<script>
export default {
  model: {
    prop: "value",
    event: "change"
  },
  props: ["value"],
  methods: {
    chan() {
      this.$emit("change", 2345678);
    }
  }
};
</script>
