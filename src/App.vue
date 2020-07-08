<template>
  <div>
    <h3>watchEffect:</h3>
    <TestWatchEffectStoped v-if="isHide" :user-id="userId" />
    <button @click="hide">卸载</button><button @click="setVal">请求</button>
    <hr />
    <h3>shallow 家族Api</h3>
    <p>测试数据:foo:{{ foo }}</p>
    <p>测试数据:nested:{{ nested.bar }}</p>
    <button @click="setVal">设置数据</button>
  </div>
</template>

<script>
import TestWatchEffectStoped from './components/Comp.vue'
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
} from 'vue'

export default {
  name: 'App',
  components: {
    TestWatchEffectStoped,
  },
  setup() {
    const state = shallowReadonly({
      foo: 1,
      nested: {
        bar: 2,
      },
    })

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
      ...toRefs(state),
      hide,
      isHide,
      userId,
      setVal,
    }
  },
}
</script>
