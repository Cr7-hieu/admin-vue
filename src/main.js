import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap'
import './assets/main.css'
import './assets/app.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)
library.add(fas)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')