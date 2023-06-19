import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes/index"
import {store} from "./store"
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
// @ts-ignore
import VueKinesis from "vue-kinesis";
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

import 'vue3-toastify/dist/index.css';

const app = createApp(App)
app.component('kinesis-container', KinesisContainer)
app.component('kinesis-element', KinesisElement)
app.use(autoAnimatePlugin)
app.use(VueKinesis)
app.use(router)
app.use(store)
app.mount('#app')