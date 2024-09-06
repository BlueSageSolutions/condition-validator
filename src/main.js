/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import router from './router'

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp(App)

registerPlugins(app)
app.use(router)
const pinia = createPinia()
app.use(pinia)

router.isReady().then(() => app.mount('#app'))
