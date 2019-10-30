<template>
  <div class="hello">
    <div class="m-u--header m-u--margin-top">

        <h1>{{ msg }}</h1>
    </div>
    <div>
        <h3 class="m-u--h4">Button example</h3>
        <m-button icon-name="m-svg__close-clear">A MODUL Button</m-button>
    </div>

    <div>
        <h3 class="m-u--h4">Icon example</h3>
        <m-icon name="m-svg__error"></m-icon>    <m-icon name="m-svg__information"></m-icon>    <m-icon name="m-svg__warning"></m-icon>
    </div>

    <div>
        <h3 class="m-u--h4">Accordion example</h3>
        <m-accordion-group >
            <m-accordion>Some Accordion Content</m-accordion>
            <m-accordion>Some Accordion Content</m-accordion>
            <m-accordion>Some Accordion Content</m-accordion>
        </m-accordion-group>
    </div>

    <div>
        <h3 class="m-u--h4">Link example</h3>
        <m-link mode="link" url="#">A link</m-link>
    </div>

    <div>
        <h3 class="m-u--h4">Textfield example</h3>
        <m-textfield placeholder="placeholder" label="label"></m-textfield>
    </div>


    <div>
        <h3 class="m-u--h4">Datepicker example</h3>
        <m-datepicker></m-datepicker>
    </div>


    <div>
        <h3 class="m-u--h4">Toast example</h3>
        <m-button @click="onToggleToast">Toggle the toast</m-button>
        <m-toast :open.sync="openProp">Toasty!</m-toast>
    </div>

    <div>
      <h3 class="m-u--h4">m-table example</h3>
      <m-table :columns="tablecolumns" :rows="tablesrows" width="100%"></m-table>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MColumnTable } from '@ulaval/modul-components';

@Component
export default class HelloWorld extends Vue {
  public openProp = false;

  public tablecolumns: MColumnTable[] = [
      { id: 'name', title: 'Name', dataProp: 'name' },
      { id: 'age', title: 'Age', dataProp: 'age' },
      { id: 'username', title: 'Username', dataProp: 'username' }];

  public tablesrows: any[] = [
                    { id: '1', name: 'Jonathan', age: '25', username: 'jonathan.25' },
                    { id: '2', name: 'Carl', age: '30', username: 'carl.30' },
                    { id: '3', name: 'Jacob', age: '26', username: 'jacob.26' },
                    { id: '4', name: 'Vincent', age: '34', username: 'vincent.34' },
                    { id: '5', name: 'Manon', age: '28', username: 'manon.28' },
  ];

  @Prop() private msg!: string;

  public onToggleToast(): void {
    this.openProp = !this.openProp;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
