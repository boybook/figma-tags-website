import './assets/main.css'

import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGlobe, faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

// 添加所有需要的图标到库中
library.add(faGlobe, faCheck, faEnvelope, faGithub, faTwitter)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(i18n)

app.mount('#app')