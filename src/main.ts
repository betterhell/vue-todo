import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes/index"
import {store} from "./store"
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import 'vue3-toastify/dist/index.css';

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(router)
app.use(store)
app.mount('#app')