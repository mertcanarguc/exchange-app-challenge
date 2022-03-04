import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.headers.authorization = localStorage.getItem('token')
axios.defaults.headers.common = {"Content-Type": "application/json"}

const app = createApp(App)
app.use(BootstrapVue3)
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router)
app.mount('#app')