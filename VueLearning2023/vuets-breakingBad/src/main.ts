// FILE: ./main.ts
// _______________________________________________

import './assets/main.css';
import App from "@/App.vue";
import router from "@/router";
import { createApp } from 'vue';
// _______________________________________________

const app = createApp(App);
app.use(router);
app.mount('#app');
// _______________________________________________
