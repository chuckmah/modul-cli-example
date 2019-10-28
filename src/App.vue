<template>
  <div id="app" class="m-u--app-body">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <m-button icon-name="m-svg__close-clear">A Button</m-button>
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
export default class App extends Vue {}
</script>

<style lang="scss">
$m-font-path: '~@ulaval/modul-components/dist/assets/fonts/';
@import "~@ulaval/modul-components/dist/styles/main.scss";


</style>
