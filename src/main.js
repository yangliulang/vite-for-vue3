import { createApp } from 'vue'
import Store from './store'
import App from './App.vue'
import './index.css'

createApp(App).use(Store).mount('#app')
