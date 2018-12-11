<template>
  <div id="app" class="container-fluid">
    <router-view/>
  </div>
</template>

<style>

@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";

h1 {
  text-shadow: 2px 2px 1px #1c2e40;
}

button {
  text-shadow: 1px 1px 0px #3c4eA0;
  box-shadow: 2px 2px 1px #1c2e40;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #2c3e50;
  min-width: 320px;
  max-width: 720px;
  box-shadow: 10px 10px 30px 8px grey;
  padding: 2em;
}

</style>
