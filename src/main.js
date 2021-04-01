import { createApp } from 'vue'
import App from './App.vue'
import dotenv from "dotenv"
import router from './router'

dotenv.config()

createApp(App)
  .use(router)
  .mount('#app')