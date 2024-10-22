import { createSSRApp } from 'vue'
import './styles/global.sass'
import App from './App.vue'
import { createRouter } from '@curves_digital/builder'
import { settingsPlugin } from './pageSettings'
import { docsPlugin } from './collections/docs'
import { articlesPlugin } from './collections/articles'
import { createPinia } from 'pinia'
import { requestsPlugin } from './collections/requests'

createSSRApp(App, { state: window.state })
  .use(createPinia())
  .use(createRouter())
  .use(docsPlugin)
  .use(articlesPlugin)
  .use(requestsPlugin)
  .use(settingsPlugin)
  .mount('#app')
