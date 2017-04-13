<template>
  <div id="app">
     <vue-header></vue-header>
  </div>
</template>

<script>
import VueHeader from './components/Header';

export default {
  name: 'app',
  components: {
    VueHeader,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
