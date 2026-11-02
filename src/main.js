import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { chargerContenu } from './data/contenu.js'

chargerContenu()
createApp(App).mount('#app')
