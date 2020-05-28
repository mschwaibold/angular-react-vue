import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import App from './App.vue';
import Home from './components/Home.vue';
import Movies from './components/Movies.vue';
import MovieDetails from './components/MovieDetails.vue';
import OidcCallback from './components/OidcCallback.vue';
import { getAccessToken } from './auth';

// import css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.css'

// import global state store
import store from './store'

Vue.config.productionTip = true;

// Configure axios interceptor to add bearer token for API requests
axios.interceptors.request.use(async function (config) {
  // set authorization header only for API requests
  if (config.url.startsWith('https://localhost:44300')) {
    const token = await getAccessToken();
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Install BootstrapVue
Vue.use(BootstrapVue)

// Install Router
Vue.use(VueRouter);

// Create routes
const routes = [
  { path: '/', component: Home },
  { path: '/movies', component: Movies },
  { path: '/movie-details/:id', component: MovieDetails },
  { path: '/oidc-callback', component: OidcCallback }
]

// Create the router
const router = new VueRouter({
  mode: 'history', // no more /#/ in my URLs!
  routes // short for `routes: routes`
})

// Create and mount the root instance.
// Innject the router and the store
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Now the app has started!
