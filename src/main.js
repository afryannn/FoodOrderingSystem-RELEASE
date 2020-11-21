import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import './assets/main.css'

Vue.prototype.$api = "http://localhost:3000/";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueToast);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')