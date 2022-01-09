import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import { routes } from '@/routing/router';
import App from './App.vue';
import '@/index.scss';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const app = createApp(App);

app.use(router);
app.mount('#app');
