<template>
  <div class="home">
    <h1>Charles Street</h1>
    <div id="imageContainer">
      <img id="image" v-bind:src="url"/>
    </div>
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

var data = {
  url: ''
};

export default {
  name: 'home',
  data: function() {
    return data;
  },
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
    },
    getImageUrl: function() {
      firestore.collection('frontdoor')
                .doc('image')
                .get().then(function(doc) {
                  data.url = doc.data().url;
                });
    }
  },
  beforeMount: function() {
    this.getImageUrl();
  }
}
</script>

<style>

#imageContainer {
  margin: 2em;
}

#image {
  width: 100%;
  box-shadow: 2px 2px 1px #1c2e40;
}

#unlock {
  margin: 2em;
}

#unlock button {
  padding: 0.5em;
  font-size: 36pt;
}

#logout {
  margin: 0.5em;
}

#logout button {
  padding: 0.5em;
  font-size: 36pt;
}

</style>
