<template>
  <!-- <div class="body" ref="body"> -->
  <div class="box"></div>
  <div class="main" ref="main">state:{{}}</div>
  <p>------{{ state.name }}------</p>
  <div class="main main1" ref="main1">state:{{}}</div>
  <div class="box"></div>
  <!-- </div> -->
</template>
<script>
import { ref, onMounted, reactive, watchEffect } from "vue";

export default {
  name: "App",
  setup() {
    const main = ref(null);
    const main1 = ref(null);
    const body = ref(null);
    const state = reactive({ name: "yangyong" });
    // watchEffect(()=>)
    // watchEffect(() => {
    //   console.log(state.name);
    // });
    return {
      state,
      main,
      main1,
      body
    };
  }
};
</script>
<style>
/* .body {
  height: 500px;
  border: 1px solid red;
  overflow-y: scroll;
}
.main {

  width: 100px;
  height: 200px;
  background-color: orange;
}
.box {
  height: 1000px;
} */
</style>
