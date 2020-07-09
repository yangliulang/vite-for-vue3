// 单一职责  开放封闭  里式替换  接口隔离  依赖反转
// class EventBus {
//   constructor() {
//     this.subscribes = {}
//   }
//   on(eventType, callback) {
//     if (!this.subscribes[eventType]) {
//       this.subscribes[eventType] = []
//     }
//     this.subscribes[eventType].push(callback)
//   }
//   emit(eventType, ...args) {
//     const callbacks = this.subscribes[eventType]
//       ? this.subscribes[eventType]
//       : []
//     callbacks.forEach((callback) => callback(args))
//   }
//   of(eventType, callback) {
//     if (!callback) {
//       this.subscribes[eventType] = null
//     } else {
//       if (this.subscribes[eventType]) {
//         const callbackIndex = this.subscribes[eventType].findIndex(
//           (cb) => cb === callback
//         )
//         this.subscribes[eventType].splice(callbackIndex, 1)
//       }
//     }
//   }
// }

// const event = new EventBus()
// const cb1 = () => {
//   console.log('北京天气')
// }
// const cb2 = () => {
//   console.log('江苏天气')
// }
// event.on('天气', cb1)
// event.on('天气', cb2)
// event.of('天气')

// event.emit('天气', 30)
// class Store {
//   constructor(name) {
//     this.name = name
//   }
//   method() {
//     return this.name
//   }
//   createCar() {
//     throw new Error('这是一个商店抽象类，不能直接调用')
//   }
// }
// class Car extends Store {
//   constructor(name) {
//     super(name)
//     this.name = name
//   }
//   createCar(name) {
//     return name
//   }
// }

// const carA = new Car('audo')
// console.log(carA)
// const obj = Object.create(null)
// console.log(obj)
// class Person {
//   constructor(name) {
//     this.name = name
//   }
// }

// const getInstance = (function () {
//   let instance = null
//   return function (name) {
//     return instance || (instance = new Person(name))
//   }
// })()

// const a = getInstance('aa')
// const b = getInstance('bb')

// console.log(a === b)
// 发布者
// class Subject {
//   constructor() {
//     this.observers = []
//   }
//   add(observer) {
//     this.observers.push(observer)
//   }
//   nofiy() {
//     this.observers.forEach((observer) => observer.update())
//   }
// }

//订阅者
// class Observe {
//   static observerIndex = 0
//   constructor(cb) {
//     this.cb = cb
//     this.observerIndex = Observe.observerIndex++
//   }
//   update() {
//     this.cb(this.observerIndex)
//   }
// }

// const Subjecter = new Subject()
// Subjecter.add(
//   new Observe((index) => {
//     console.log('来自北京的天气通知', index)
//   })
// )
// Subjecter.add(
//   new Observe((index) => {
//     console.log('来自江苏的天气通知', index)
//   })
// )

// Subjecter.nofiy()
