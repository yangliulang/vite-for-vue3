<template>
  <div>
    <!-- <slot></slot>
    <slot name="top"></slot> -->
    <h3 ref="h3">userInfo:{{ userInfo }}</h3>
    <h3 ref="h3">userName:{{ userName }}</h3>
    <button @click="setUserInfo">set count</button>
  </div>
</template>
<script>
import { isProxy, getCurrentInstance, nextTick, ref, computed } from 'vue'
import { useStore, mapState } from 'vuex'
export default {
  name: 'CurrentInstance',
  props: ['info'],
  setup(props, { attrs, emit, slots }) {
    // const currentInstance = getCurrentInstance()
    // const currentContext = currentInstance.ctx
    const store = useStore()
    const userInfo = computed(() => store.state.userInfo)
    const userName = computed(() => store.getters.userName)
    // console.log('store', store)
    function setUserInfo() {
      store.commit('SET_USER_INFO', { name: 'yangyong' })
    }

    // console.log('currentContext:', currentContext)
    // console.log('attrs:', attrs)
    // console.log('slots:', slots.top)
    // console.log('attrs:', currentContext.$attrs)
    // console.log('slots:', currentContext.$slots === slots)
    // console.log('currentInstance:', currentInstance)
    // console.log('props:', info, isProxy(info))
    return {
      setUserInfo,
      userInfo,
      userName,
    }
  },
}
</script>
