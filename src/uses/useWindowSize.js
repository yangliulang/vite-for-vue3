import useThrottle from './useThrottle'
import { reactive, toRefs } from 'vue'
export default function () {
  const react = reactive({ width: 0, height: 0 })
  window.addEventListener(
    'resize',
    useThrottle(() => {
      react.width = window.innerWidth
      react.height = window.innerHeight
    }, 500)
  )
  return {
    ...toRefs(react),
  }
}
