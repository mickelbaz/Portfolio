<template>
  <div id="app">
    <toolbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Toolbar from './components/toolbar.vue'
import Homepage from './components/homepage.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    Homepage
  }
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
