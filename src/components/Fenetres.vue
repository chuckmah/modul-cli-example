<template>
  <div class="fenetre">
        <h3 class="m-u--h3">FENETRES</h3>
        <m-popup>
        <m-button slot="trigger">Ouvrir</m-button>
        <div class="m-u--padding" style="background: #fff">
            Consectetur dolore commodo voluptate est laborum ex nulla.
        </div>

        </m-popup>
        <m-button @click="onShowDialog">Show dialog</m-button>
          <m-modal size="small" title="A modal title">
                        <m-button slot="trigger">Open the modal</m-button>
                        Some body text
                        <p slot="footer">Some footer slot content</p>
                        <m-button slot="footer">Here goes nothing</m-button>
                   </m-modal>
      <m-overlay title="Title">
                <m-button slot="trigger">Open overlay</m-button>
                <m-textfield></m-textfield>
            </m-overlay>
            <m-tooltip>
    Veniam qui mollit officia magna aute amet culpa irure excepteur culpa fugiat. Adipisicing ex occaecat elit suntdolore sint Lorem ex pariatur ea est non non amet. Irure deserunt reprehenderit ullamco sit id officia dolor fugiat ullamco irure officia. Adipisicing officia magna nisi consequat velit enim excepteur.
</m-tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MColumnTable } from '@ulaval/modul-components';

@Component
export default class Fenetres extends Vue {

  public onShowDialog(): void {
      this.$dialog.confirm('dialog example');
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
