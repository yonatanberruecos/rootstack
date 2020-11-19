import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Pagination from 'v-pagination-3';


const app = createApp(App)
// app.use(VueAxios, axios)
// app.use(BootstrapVue, IconsPlugin)

app.use(router).use(VueAxios,axios).mount('#app')
app.component('pagination', Pagination);
