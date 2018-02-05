<template>
  <div id="app">
    <navi></navi>
    <router-view/>
  </div>
</template>

<script>
import navi from './components/Navi'
export default {
  name: 'App',
  components: {
    navi
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
