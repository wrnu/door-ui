import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import config from './config';

Vue.config.productionTip = false;

let app = '';
const firebase_config = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH,
  databaseURL: config.FIREBASE_DB,
  projectId: config.FIREBASE_PROJECT,
  storageBucket: config.FIREBASE_BUCKET,
  messagingSenderId: config.FIREBASE_SENDER_ID,
};

const firebaseApp = firebase.initializeApp(firebase_config);
const firestore = firebaseApp.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

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
