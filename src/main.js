import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import axios from 'axios';
import PrimeVue from 'primevue/config';
import store from './vuex/store';
import App from './App.vue'
import router from './router'

axios.defaults.baseURL = 'https://api.publicapis.org';

const app = createApp(App)

app.use(router).use(store).use(PrimeVue)

app.mount('#app')
