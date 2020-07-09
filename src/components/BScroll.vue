<template>
  <div class="scroll-wrapper" ref="scroll">
    <div class="content">
      <dl v-for="(item, index) in lists" :key="index">
        <dt>{{ item.title }}</dt>
        <dd v-for="sub in item.items" :key="sub">{{ sub }}</dd>
      </dl>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { reactive, onMounted, ref } from 'vue'
export default {
  name: 'BScroll',
  setup() {
    const scroll = ref(null)
    const lists = reactive([
      { title: '第一组', items: [1.111, 1.222, 1.333, 1.444, 1.555] },
      { title: '第二组', items: [2.111, 2.222, 2.333, 2.444, 2.555] },
      { title: '第三组', items: [3.111, 3.222, 3.333, 3.444, 3.555] },
      { title: '第四组', items: [4.111, 4.222, 4.333, 4.444, 4.555] },
      { title: '第五组', items: [5.111, 5.222, 5.333, 5.444, 5.555] },
      { title: '第六组', items: [6.111, 6.222, 6.333, 6.444, 6.555] },
      { title: '第七组', items: [7.111, 7.222, 7.333, 7.444, 7.555] },
    ])
    onMounted(() => {
      new BScroll(scroll.value, {
        scrollY: true,
        click: true,
        bounce: {
          top: false,
        },
      })
    })
    return {
      lists,
      scroll,
    }
  },
}
</script>
<style>
.scroll-wrapper {
  width: 350px;
  height: 500px;
  border: 1px solid red;
  /* overflow-y: scroll; */
}
.scroll-wrapper dt {
  position: sticky;
  top: 0;
}
</style>
