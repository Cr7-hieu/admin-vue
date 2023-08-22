import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap'
import './assets/app.scss'
const app = createApp(App)

import 'swiper/css';
app.use(createPinia())
app.use(router)

app.mount('#app')
