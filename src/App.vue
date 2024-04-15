<template>
  <h1>{{ state.name }} {{ state.lastName }}</h1>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


  const state = reactive({
    name: 'Michal',
    lastName: 'Michalewski'
  })

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
