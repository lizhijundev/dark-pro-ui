import { createApp } from 'vue';
import App from './app.vue';
import darkProUI from '@lizhijundev/lizhi-ui';
const app = createApp(App);
app.use(darkProUI);
app.mount('#app');
