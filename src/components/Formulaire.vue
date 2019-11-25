<template>
  <div class="formulaire">
    <h3 class="m-u--h4">FORMULAIRE</h3>
        <m-form class="m-u--margin-top"
    :form-group="formGroup">
      <div>
          <h3 class="m-u--h4">Textfield example</h3>
          <m-textfield
                      v-m-control="nameField"
                      v-model="nameField.value"
                      :required-marker="true"
                      placeholder="placeholder" 
                      label="label"
                      helper-message="2 characters min - 20 characters max"
                      :character-count="true"
                      :error="nameField.hasError()"
                      :error-message="nameField.errorMessage"></m-textfield>
      </div>

      <div>
          <m-dropdown v-m-control="typeField"
                    v-model="typeField.value"
                    label="Type"
                    :required-marker="true"
                    :error="typeField.hasError()"
                    :error-message="typeField.errorMessage">
            <m-dropdown-item v-for="type of types"
                              :key="type"
                             :value="type"
                             :label="type"></m-dropdown-item>
        </m-dropdown> <br />
      </div>

      <div>
          <h3 class="m-u--h4">Datepicker example</h3>
          <m-datepicker v-m-control="birthdateField"
                      v-model="birthdateField.value"
                      label="Birthdate"
                      min="1900-01-01"
                      max="2020-01-01"
                      :required-marker="true"
                      :error="birthdateField.hasError()"
                      :error-message="birthdateField.errorMessage">
        </m-datepicker> <br />
      </div>

              <p class="m-u--margin-top--l m-u--margin-bottom--l">
            <m-button type="submit">Submit</m-button>
            <m-button type="reset"
                      skin="secondary">Reset</m-button>
        </p>
    </m-form>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// tslint:disable-next-line:max-line-length
import { MColumnTable, FormGroup, FormControl, RequiredValidator, MaxLengthValidator, AbstractControl, MinLengthValidator } from '@ulaval/modul-components';

@Component
export default class Formulaire extends Vue {
      public types: string[] = ['douce', 'blanche', 'sec'];

      public formGroup =  new FormGroup(
            {
                name: new FormControl<string>([
                        RequiredValidator(),
                        MaxLengthValidator(20),
                        MinLengthValidator(2),
                    ]),
                birthdate: new FormControl<string>([
                        RequiredValidator(),
                    ]),
               type: new FormControl<string>([
                        RequiredValidator(),
                    ]),
            },
        );

    get nameField(): AbstractControl<string> {
        return this.formGroup.getControl<string>('name');
    }

    get birthdateField(): AbstractControl<string> {
        return this.formGroup.getControl<string>('birthdate');
    }

    get typeField(): AbstractControl<string> {
        return this.formGroup.getControl<string>('type');
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
