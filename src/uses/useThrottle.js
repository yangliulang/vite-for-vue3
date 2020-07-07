function throttle(fn, time = 1000) {
  let nowTime = 0
  let lastTime = 0
  let flag = true
  return (...args) => {
    nowTime = Date.now()
    if (nowTime - lastTime >= time) {
      flag = true
    }
    if (flag) {
      flag = false
      lastTime = Date.now()
      fn.apply(this, args)
    }
  }
}
// function throttle(fn, time = 1000) {
//   let flag = true
//   return (...args) => {
//     if (!flag) {
//       return
//     }
//     flag = false
//     setTimeout(() => {
//       fn.apply(this, args)
//       flag = true
//     }, time)
//   }
// }

export default throttle
