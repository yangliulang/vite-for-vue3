import { createApp } from 'vue'
import Store from './store'
import Router from './router'
import App from './App.vue'
import './index.css'

createApp(App).use(Store).use(Router).mount('#app')
