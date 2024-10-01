import './assets/main.css';

import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import Card from 'primevue/card';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Menubar from 'primevue/menubar'
import Ripple from 'primevue/ripple';

import HomeLayout from './layouts/Home.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.component('Card', Card);
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('Menubar', Menubar);

app.component('HomeLayout', HomeLayout)

app.directive('ripple', Ripple);

app.mount('#app');
