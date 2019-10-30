<template>
  <div id="app" class="m-u--app-body">

<!-- 
      <img alt="Vue logo" src="./assets/logo.png"> -->
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript + MODUL App"/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
// modul sass overrides here.

$m-font-path: '~@ulaval/modul-components/dist/assets/fonts/'; //this is required. 

@import "~@ulaval/modul-components/dist/styles/main.scss";


</style>
