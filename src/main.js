import Vue from 'vue';
import App from './App.vue';
import store from './store';
import axios from "axios";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);

const initialStore = localStorage.getItem("store");

if (initialStore) {
  store.commit("initialise", JSON.parse(initialStore));
  if (store.getters.isAuthenticated) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      store.state.auth.accessToken
    }`;
  }
}

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
