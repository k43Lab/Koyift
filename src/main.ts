import './assets/main.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const colorMode = window.matchMedia('(prefers-color-scheme: light)').matches
if (!colorMode) document.querySelector('html')?.setAttribute('class', 'dark')

app.use(router)

app.mount('#app')
