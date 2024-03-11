import 'primevue/resources/themes/aura-light-green/theme.css'
import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import store from './vuex/store';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(store).use(PrimeVue)

app.mount('#app')
