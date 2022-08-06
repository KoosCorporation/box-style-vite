import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import  './normalize.css'
import router from './router'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
