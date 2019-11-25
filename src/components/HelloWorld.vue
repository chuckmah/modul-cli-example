<template>
  <div class="hello">
    <div class="m-u--header m-u--margin-top">

        <h1>{{ msg }}</h1>
    </div>
  
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MColumnTable } from '@ulaval/modul-components';
import UtilsPluginOptions from '@ulaval/modul-components/dist/utils/utils-plugin';
@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
