<template>
  <div id="app">
    <router-view>
      <navigation-bar></navigation-bar>
    </router-view>
    <drawer direction="left" state="open"></drawer>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import Drawer from './components/Drawer'

export default {
  name: 'app',
  components: {
    'navigation-bar': NavigationBar,
    'drawer': Drawer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
