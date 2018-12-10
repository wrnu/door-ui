<template>
  <div class="container-fluid login">
    <h1>Charles Street</h1>
    <h3>Sign In</h3>
    <div class="container-fluid">
      <input v-on:keyup.enter="login" type="text" v-model="email" placeholder="Email" class="form-control">
      <input v-on:keyup.enter="login" type="password" v-model="password" placeholder="Password" class="form-control">
      <button v-on:click="login" type="button" class="btn btn-primary">Login</button>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('home')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  .login {
    margin-top: 1em;
  }
  input {
    font-size: 24pt;
    margin: 1em auto;
    width: 80%;
  }
  button {
    font-size: 36pt;
    margin: 1em auto;
    width: 50%;
    cursor: pointer;
    box-shadow: 2px 2px 1px #1c2e40;
    text-shadow: 1px 1px 0px #3c4eA0;
  }
</style>
