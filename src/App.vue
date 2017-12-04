<template>
  <div id="app">
    <div class="container nav-container">
          <a data-v-cadbadf2="" href="/" class="navbar-brand router-link-active">
            Home
         </a>
      <div class="navigation" align="right">
        <router-link :to="{ name: 'HelloWorld' }">Login</router-link>
        <router-link to="/Register">Register</router-link>
      </div>
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
