import App from './App.vue'
import './assets/styles/index.scss'
import './assets/styles/tailwind/index.css'
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')
