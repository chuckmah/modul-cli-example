<template>
  <div class="tableau">
    <div>
      <h3 class="m-u--h4">TABLEAUX</h3>
      <m-table :columns="tablecolumns" :rows="tablesrows" width="100%"></m-table>
    </div>
    <div>
          <m-show-more :nb-visible="data.length"
                 :nb-total="total"
                 :loading.sync="loading"
                 @click="fetchData">
        </m-show-more>
    </div>
    <div>
      <m-pagination v-model="model1" :items-total="itemsTotal"></m-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MColumnTable } from '@ulaval/modul-components';

@Component
export default class Tableaux extends Vue {

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

  public  data: number[] = [];
  public  total: number = 20;
  public loading: boolean = false;
  public model1 =  1;
  public itemsTotal = 500;
  public fetchData(): void {
        if (this.data.length < this.total) {
            setTimeout(() => {
                this.data.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
                this.loading = false;
            }, 1000);
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
