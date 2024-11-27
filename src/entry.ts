import { createRouter } from '@curves_digital/builder';
import { createPinia } from 'pinia';
import { createSSRApp } from 'vue';
import App from './App.vue';
import { articlesPlugin } from './collections/articles';
import { docsPlugin } from './collections/docs';
import { requestsPlugin } from './collections/requests';
import { settingsPlugin } from './pageSettings';
import './styles/global.css';

createSSRApp(App, { state: window.state })
	.use(createPinia())
	.use(createRouter())
	.use(docsPlugin)
	.use(articlesPlugin)
	.use(requestsPlugin)
	.use(settingsPlugin)
	.mount('#app');
