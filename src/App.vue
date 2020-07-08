<template>
  <div>
    <h3>CurrentInstance:</h3>
    <CurrentInstance :info="{ name: '杨永' }" data-id="1">
      <p>default slot</p>
      <template v-slot:top>
        <p>slot name top</p>
      </template>
    </CurrentInstance>
    <hr />
    <h3>watchEffect:</h3>
    <TestWatchEffectStoped v-if="isHide" :user-id="userId" />
    <button @click="hide">卸载</button><button @click="setVal">请求</button>
    <hr />
    <h3>shallow 家族Api</h3>
    <p>测试数据:state:{{ state }}</p>
    <button @click="setVal">设置数据</button>
  </div>
</template>

<script>
import TestWatchEffectStoped from './components/Comp.vue'
import CurrentInstance from './components/CurrentInstance.vue'
import {
  ref,
  customRef,
  watch,
  toRefs,
  shallowReactive,
  shallowReadonly,
  isReactive,
  reactive,
  isReadonly,
  markRaw,
  watchEffect,
  computed,
} from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  components: {
    TestWatchEffectStoped,
    CurrentInstance,
  },
  setup() {
    const store = useStore()
    const state = computed(() => store.state.userInfo)

    function setVal() {
      userId.value++
      // console.log('正在请求用户id：', userId.value)
    }
    function hide() {
      isHide.value = !isHide.value
    }
    //----------------------------------------->

    const userId = ref(0)
    const isHide = ref(true)
    // const stop = watchEffect(async () => {
    //   const userInfo = await new Promise((resolve) => {
    //     const id = userId.value
    //     setTimeout(() => {
    //       resolve({ name: `用户:${id}的详情`, age: 30 })
    //     }, 1000)
    //   })
    //   console.log('userInfo', userInfo)
    // })

    return {
      // ...toRefs(state),
      state,
      hide,
      isHide,
      userId,
      setVal,
    }
  },
}
</script>
