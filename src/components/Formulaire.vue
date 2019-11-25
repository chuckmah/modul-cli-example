<template>
  <div class="formulaire">
    <h3 class="m-u--h4">FORMULAIRE</h3>
    <div>
        <h3 class="m-u--h4">Textfield example</h3>
        <m-textfield placeholder="placeholder" label="label"></m-textfield>
    </div>


    <div>
        <h3 class="m-u--h4">Datepicker example</h3>
        <m-datepicker></m-datepicker>
    </div>


  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MColumnTable } from '@ulaval/modul-components';

@Component
export default class Formulaire extends Vue {


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
