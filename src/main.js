import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

let app = '';
const config = {
  apiKey: "AIzaSyDUUTeOsVix5EGuL0Zuclowk8boDgch8pI",
  authDomain: "door-20761.firebaseapp.com",
  databaseURL: "https://door-20761.firebaseio.com",
  projectId: "door-20761",
  storageBucket: "door-20761.appspot.com",
  messagingSenderId: "674832136931"
};

const firebaseApp = firebase.initializeApp(config);
const firestore = firebaseApp.firestore();

export {
  firebaseApp,
  firestore
}

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
