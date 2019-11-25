<template>
  <div class="button">
    <h3 class="m-u--h3">BOUTONS ET INDICATEURS</h3>

    <m-button icon-name="m-svg__close-clear">A MODUL Button</m-button>

    <m-icon name="m-svg__error"></m-icon>    <m-icon name="m-svg__information"></m-icon>    <m-icon name="m-svg__warning"></m-icon>

    <m-add></m-add>
    <m-icon-button></m-icon-button>
    <m-icon-file extension=".bmp"></m-icon-file>
            <m-progress :indeterminate="true" circle="true" value="67"></m-progress>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MColumnTable } from '@ulaval/modul-components';

@Component
export default class Boutons extends Vue {


}
</script>


<style scoped lang="scss">

</style>
