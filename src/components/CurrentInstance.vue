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
import {
  isProxy,
  getCurrentInstance,
  nextTick,
  onActivated,
  onDeactivated,
  ref,
  computed,
} from 'vue'
import { useStore, mapState } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'CurrentInstance',
  props: ['info'],
  setup(props, { attrs, emit, slots }) {
    // const currentInstance = getCurrentInstance()
    // const currentContext = currentInstance.ctx
    const store = useStore()
    const router = useRouter()
    const userInfo = computed(() => store.state.userInfo)
    const userName = computed(() => store.getters.userName)
    // console.log('store', store)
    function setUserInfo() {
      store.commit('SET_USER_INFO', { name: 'yangyong' })
      router.push({
        path: '/about',
        query: {
          id: 10,
        },
      })
    }
    // 对元素的css属性就行读写会引发重绘重排
    // 对样式批量操作，就是说可以定义class名来切换
    // 执行一些dom操作，在fragment中组装老了，或者线displaynone操作
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
