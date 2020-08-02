<template>
  <div>
    <!-- <slot></slot>
    <slot name="top"></slot> -->
    <h3 ref="h3Ref">userInfo:{{ userInfo }}</h3>
    <h3>userName:{{ userName }}</h3>
    <button @click="setUserInfo">set count</button>
  </div>
</template>
<script>
import {
  isProxy,
  getCurrentInstance,
  nextTick,
  onActivated,
  onDeactivated,
  ref,
  computed
} from "vue";
import { useStore, mapState } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "CurrentInstance",
  props: ["info"],
  setup(props, { attrs, emit, slots }) {
    const store = useStore();
    const router = useRouter();
    const userInfo = computed(() => store.state.userInfo);
    const userName = computed(() => store.getters.userName);
    const h3Ref = ref(null);
    function setUserInfo() {
      store.commit("SET_USER_INFO", { name: "yangyong" });
    }

    return {
      setUserInfo,
      userInfo,
      userName,
      h3Ref
    };
  }
};
</script>
