const toProxy = new WeakMap();
const toRaw = new WeakMap();
function defineReactive(target) {
  // 判断当前传递进来的target是不是一个对象
  if (!isObject(target)) {
    return target;
  }
  if (toProxy.has(target)) {
    return toProxy.get(target);
  }
  if (toRaw.has(target)) {
    return target;
  }
  const observed = new Proxy(target, {
    get(target, key, reveicer) {
      const ret = Reflect.get(target, key, reveicer);
      // console.log(`正在获取:${key}的值`);
      // 对就行取值时的对象和key就行副作用函数收集
      trackEffectCallbacks(target, key);
      return isObject(ret) ? defineReactive(ret) : ret;
    },
    set(target, key, value, reveicer) {
      const ret = Reflect.set(target, key, value, reveicer);
      // console.log(`正在设置:${key}的值为:${value}`);
      triggerEffectCallback(target, key);
      return ret;
    },
    deleteProperty(target, key, reveicer) {
      const ret = Reflect.deleteProperty(target, key, reveicer);
      // console.log(`正在删除:${key}的值`);
      return ret;
    }
  });
  toProxy.set(target, observed);
  toRaw.set(observed, target);
  return observed;
}
function isObject(target) {
  return typeof target === "object" || target === null;
}
const targetsMaps = new WeakMap();
// targetsMaps:{
//     target1:{
//         key1:[ef1,ef2],
//         key2:[ef1,ef2],
//     },
//     target2:{
//         key1:[ef1,ef2]
//     }
// }
function trackEffectCallbacks(target, key) {
  const effect = reactiveEffectStack[reactiveEffectStack.length - 1];
  if (effect) {
    // 先看下targetsMaps有没有target的映射，不存在创建
    let depsMap = targetsMaps.get(target);
    if (!depsMap) {
      targetsMaps.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);

    if (!dep) {
      depsMap.set(key, (dep = new Set()));
    }
    dep.add(effect);
  }
}
function triggerEffectCallback(target, key) {
  const depsMap = targetsMaps.get(target);
  const dep = depsMap.get(key);
  dep.forEach((effect) => effect());
}
const reactiveEffectStack = [];
function watchEffect(effectFn) {
  const reactiveFn = function () {
    try {
      reactiveEffectStack.push(reactiveFn);
      effectFn();
    } finally {
      reactiveEffectStack.pop();
    }
  };

  reactiveFn();
}
const data = {
  name: "yangyong",
  age: "33",
  son: {
    name: "xiatian",
    age: 2
  }
};

const state = defineReactive(data);

watchEffect(function effect1() {
  console.log("effect1", state.name);
});
watchEffect(function effect2() {
  console.log("effect2", state.age);
});

state.name = "4567890";
