<template>
  <div>
    <h4>测试watchEffect:在组件卸载时，自动停止侦听</h4>
  </div>
</template>
<script>
import { watchEffect, onMounted, onUpdated, onBeforeUpdate } from 'vue'
export default {
  props: ['userId'],
  setup(props) {
    watchEffect(
      (onInvalidate) => {
        console.log('watchEffect', props.userId)
      },
      {
        //让侦听函数在组件更新前后执行的参数
        flush: 'pre',
      }
    )
    onBeforeUpdate(() => {
      console.log('组件更新前........')
    })
    onUpdated(() => {
      console.log('组件更新完成.....')
    })
  },
}
</script>
