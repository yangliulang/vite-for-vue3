function throttle(fn, time = 1000) {
  let nowTime = 0
  let lastTime = 0
  let flag = true
  return () => {
    nowTime = Date.now()
    if (nowTime - lastTime >= time) {
      flag = true
    }
    if (flag) {
      flag = false
      lastTime = Date.now()
      fn()
    }
  }
}
// function throttle(fn, time = 1000) {
//   let flag = true
//   return () => {
//     if (!flag) {
//       return
//     }
//     flag = false
//     setTimeout(() => {
//       fn()
//       flag = true
//     }, time)
//   }
// }

export default throttle
