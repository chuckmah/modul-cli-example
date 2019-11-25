<template>
  <div id="app" class="m-u--app-body">


      <HelloWorld msg="Welcome to Your Vue.js + TypeScript + MODUL App"/>
      <boutons></boutons>
      <contenu></contenu>
      <fenetres></fenetres>
      <navigation></navigation>
      <tableaux></tableaux>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Boutons from './components/Boutons.vue';
import Contenu from './components/Contenu.vue';
import Fenetres from './components/Fenetres.vue';
import Formulaire from './components/Formulaire.vue';
import Navigation from './components/Navigation.vue';
import Tableaux from './components/Tableaux.vue';

@Component({
  components: {
    HelloWorld,
    Boutons,
    Contenu,
    Fenetres,
    Formulaire,
    Navigation,
    Tableaux,
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
