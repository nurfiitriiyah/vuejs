// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// import VueSweetalert2 from 'vue-sweetalert2';
//
// Vue.use(VueSweetalert2, options)
// Vue.use(VueAxios, axios);
//
// Vue.config.productionTip = false
//
// const options = {
//   confirmButtonColor: '#68b3ab',
//   cancelButtonColor: '#ff7674'
// }
//
//
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

import Vue from "vue";
import App from "./App";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
