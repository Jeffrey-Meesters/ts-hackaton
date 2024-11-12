import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue//themes/aura'
import Tree from 'primevue/tree';
import Button from 'primevue/button';
import Card from 'primevue/card';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark', // non existing selector to turn darkmode off
    },
  },
})
app.use(createPinia())
app.use(router)

app.component('Tree', Tree);
app.component('Button', Button);
app.component('Card', Card);

app.mount('#app')
