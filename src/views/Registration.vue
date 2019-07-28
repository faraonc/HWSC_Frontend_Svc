<template>
  <v-layout>
    <v-form>
      <v-text-field
        :name="name"
        v-model="email"
        :placeholder="$t('email')"
        :error-messages="errors"
      />
    </v-form>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Validator } from 'vee-validate';

@Component
export default class Registration extends Vue {
    private validator$ = new Validator();

    private errors: string[] = [];

    private name: string = 'email';

    private rules: string = 'email';

    private email: string = '';

    @Watch('email')
    async onEmailChanged(value: string) {
      if (value) {
        await this.verify(value);
      }
    }

    async verify(value: string) {
      const { errors } = await this.validator$.verify(value, this.rules, { name: this.name });
      this.errors = errors;
    }
}
</script>
