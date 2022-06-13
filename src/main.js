import Vue from 'vue'
//import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)

Vue.config.productionTip = false;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const Config = {
  apiKey: 'AIzaSyCiW-41UIEEu72yW8lQrUaKCLDvfaeibEo',
  authDomain: 'cozycone-ea4bd.firebaseapp.com',
  projectId: 'cozycone-ea4bd',
  storageBucket: 'cozycone-ea4bd.appspot.com',
  messagingSenderId: '377443484559',
  appId: '1:377443484559:web:b1ddb6d66782425a3d81fa',
  measurementId: 'G-VCZXS7SR93'
};

// Initialize Firebase
firebase.initializeApp(Config);*/

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
