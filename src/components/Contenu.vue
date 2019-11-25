<template>
  <div class="contenu">

    <h3 class="m-u--h3">CONTENU</h3>

    <div>
        <m-button @click="onToggleToast">Toggle the toast</m-button>
        <m-spinner :title="true" :description="true"></m-spinner>
        <m-message>A message for testing purposes</m-message>
        <!-- <m-steppers>
            <m-steppers-item state="visited">Label 1</m-steppers-item>
            <m-steppers-item state="visited">Label 2</m-steppers-item>
            <m-steppers-item state="in-progress">Label 3</m-steppers-item>
            <m-steppers-item state="disabled">Label 4</m-steppers-item>
        </m-steppers> -->

    </div>
    <p>
      <h4 class="m-u--h4">Accordion example </h4>
      <m-accordion-group>
          <m-accordion>Some Accordion Content</m-accordion>
          <m-accordion>Some Accordion Content</m-accordion>
          <m-accordion>Some Accordion Content</m-accordion>
      </m-accordion-group>
    </p>

    <p>
      <h4 class="m-u--h4">tree example </h4>
      <m-tree :tree="tree"
        selection-mode="none"></m-tree>
    </p>
    <m-panel>
        <h2 slot="header">Panel</h2>
        Do consectetur aute pariatur amet ut pariatur Lorem. Commodo exercitation et incididunt tempor aliqua culpa culpa. Do sint exercitation quis amet.
    </m-panel>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MColumnTable, TreeNode } from '@ulaval/modul-components';

@Component
export default class Contenu extends Vue {
  public openProp = false;

public tree: TreeNode[] = [
        {
            id: '1',
            label: 'Title 1',
            hasChildren: true,
            children: [
                {
                    id: '2',
                    label: 'Subtitle 1',
                },
                {
                    id: '3',
                    label: 'Subtitle 2',
                    children: [
                        {
                            id: '2',
                            label: 'Subtitle 1',
                        },
                        {
                            id: '3',
                            label: 'Subtitle 2',
                            hasChildren: true,
                        },
                        {
                            id: '4',
                            label: 'Subtitle 3',
                        },
                        {
                            id: '5',
                            label: 'Subtitle 4',
                        },
                    ],
                },
                {
                    id: '4',
                    label: 'Subtitle 3',
                },
                {
                    id: '5',
                    label: 'Subtitle 4',
                },
            ],
        },
        {
            id: '6',
            label: 'Title 2',
        },
        {
            id: '7',
            label: 'Title 3',
            open: true,
            children: [
                {
                    id: '1',
                    label: 'Subtitle 1',
                },
                {
                    id: '2',
                    label: 'Subtitle 2',
                },
            ],
        },
    ];

  public onToggleToast(): void {
    this.$toast.show({text: 'i\'m a toast'});
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
