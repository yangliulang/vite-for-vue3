// 定义响应式数据
// function defineReactive(object, key, value) {
//   Object.defineProperty(object, key, {
//     enumerable: true,
//     configurable: true,
//     get() {
//       console.log(`-----你在取${key}的值------`)
//       return value
//     },
//     set(newVal) {
//       console.log(`-----你在设置${key}的值------`)
//       value = newVal
//     },
//   })
//   return object
// }
// // 编译模板
// function compile(root) {
//   const rootEle = root
//   const fragment = document.createDocumentFragment()
//   let firstChild = rootEle.firstChild
//   while (firstChild) {
//     fragment.appendChild(firstChild)
//     firstChild = rootEle.firstChild
//   }
//   console.dir(fragment)
//   rootEle.appendChild(fragment)
// }
// const data = {
//   name: '杨永',
//   age: 30,
//   son: {
//     name: '杨奕瑾',
//     age: 2,
//   },
// }

// const reactiveData = defineReactive(data, 'name', data['name'])

// compile(document.getElementById('vue'))

// console.log(n)
// console.log(reactiveData)
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
