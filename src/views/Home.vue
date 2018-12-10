<template>
  <div class="home">
    <h1>Charles Street Home</h1>
    <div id="unlock">
      <button v-on:click="unlock()" type="button" class="btn btn-primary">Unlock</button>
    </div>
    <div id="logout">
      <button v-on:click="logout()" type="button" class="btn btn-primary">Logout</button>
    </div>
  </div>
</template>

<script>
import {firebaseApp, firestore} from '../main';

export default {
  name: 'home',
  methods: {
    logout: function() {
      firebaseApp.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    unlock: function() {
      firestore.collection('frontdoor')
                 .doc('action')
                 .set({'unlock': true});
    }
  }
}
</script>

<style>

#unlock {
  margin: 0.5em;
}

#logout {
  margin: 0.5em;
}

</style>
