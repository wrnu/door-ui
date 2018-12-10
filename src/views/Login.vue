<template>
  <div class="container-fluid login">
    <h1>Charles Street Home</h1>
    <h3>Sign In</h3>
    <div class="container-fluid">
      <input type="text" v-model="email" placeholder="Email" class="form-control">
      <input type="password" v-model="password" placeholder="Password" class="form-control">
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
    margin: 1em auto;
    width: 25%;
  }
  button {
    margin-top: 1em;
    width: 10%;
    cursor: pointer;
  }
</style>
