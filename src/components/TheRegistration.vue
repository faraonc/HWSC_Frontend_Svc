<template>
  <form>
    <v-text-field
      v-model="firstName"
      :error-messages="firstNameErrors"
      :counter="nameCounter"
      :label="$t('registration.labels.first_name') | capitalize"
      required
      @input="$v.firstName.$touch()"
      @blur="$v.firstName.$touch()"
    />
    <v-text-field
      v-model="lastName"
      :error-messages="lastNameErrors"
      :counter="nameCounter"
      :label="$t('registration.labels.last_name') | capitalize"
      required
      @input="$v.lastName.$touch()"
      @blur="$v.lastName.$touch()"
    />
    <v-text-field
      v-model="organization"
      :error-messages="organizationErrors"
      :counter="organizationCounter"
      :label="$t('registration.labels.organization') | capitalize"
      required
      @input="$v.organization.$touch()"
      @blur="$v.organization.$touch()"
    />
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      :label="$t('registration.labels.e-mail') | capitalize"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    />
    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      :counter="passwordCounter"
      :label="$t('registration.labels.password') | capitalize"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    />
    <v-text-field
      v-model="confirmPassword"
      :error-messages="confirmPasswordErrors"
      :counter="passwordCounter"
      :label="$t('registration.labels.confirm_password') | capitalize"
      required
      @input="$v.confirmPassword.$touch()"
      @blur="$v.confirmPassword.$touch()"
    />
    <v-btn @click="submit">
      {{ $t('buttons.submit') }}
    </v-btn>
    <v-btn @click="clear">
      {{ $t('buttons.clear') }}
    </v-btn>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';
import { stringMixin } from '@/mixins/string';
import * as rules from '@/consts/rules';
import * as gateway from '@/store/modules/gateway/index';


export default {
  mixins: [validationMixin, stringMixin],
  validations: {
    firstName: {
      required,
      maxLength: maxLength(rules.MAX_NAME_LEN),
    },
    lastName: {
      required,
      maxLength: maxLength(rules.MAX_NAME_LEN),
    },
    organization: {
      required,
      maxLength: maxLength(rules.MAX_ORG_LEN),
    },
    email: {
      required,
      email,
      maxLength: maxLength(rules.MAX_EMAIL_LEN),
    },
    password: {
      required,
      maxLength: maxLength(rules.MAX_PASSWORD_LEN),
    },
    confirmPassword: {
      required,
      maxLength: maxLength(rules.MAX_PASSWORD_LEN),
    },
  },
  data: () => ({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    password: '',
    confirmPassword: '',
    nameCounter: rules.MAX_NAME_LEN,
    organizationCounter: rules.MAX_ORG_LEN,
    passwordCounter: rules.MAX_PASSWORD_LEN,
  }),
  computed: {
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.maxLength && errors.push(this.$t('registration.errors.length',
        [this.capitalize(this.$t('registration.labels.first_name')), rules.MAX_NAME_LEN]));
      !this.$v.firstName.required && errors.push(this.$t('registration.errors.required',
        [this.capitalize(this.$t('registration.labels.first_name'))]));
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.lastName.maxLength && errors.push(this.$t('registration.errors.length',
        [this.capitalize(this.$t('registration.labels.last_name')), rules.MAX_NAME_LEN]));
      !this.$v.lastName.required && errors.push(this.$t('registration.errors.required',
        [this.capitalize(this.$t('registration.labels.last_name'))]));
      return errors;
    },
    organizationErrors() {
      const errors = [];
      if (!this.$v.organization.$dirty) return errors;
      !this.$v.organization.maxLength && errors.push(this.$t('registration.errors.length',
        [this.capitalize(this.$t('registration.labels.organization')), rules.MAX_ORG_LEN]));
      !this.$v.organization.required && errors.push(this.$t('registration.errors.required',
        [this.capitalize(this.$t('registration.labels.organization'))]));
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.maxLength && errors.push(this.$t('registration.errors.length',
        [this.capitalize(this.$t('registration.labels.e-mail')), rules.MAX_EMAIL_LEN]));
      !this.$v.email.email && errors.push(this.capitalize(this.$t('registration.errors.email')));
      !this.$v.email.required && errors.push(this.$t('registration.errors.required',
        [this.capitalize(this.$t('registration.labels.e-mail'))]));
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength && errors.push(this.$t('registration.errors.length',
        [this.capitalize(this.$t('registration.labels.password')), rules.MAX_PASSWORD_LEN]));
      !this.$v.password.required && errors.push(this.$t('registration.errors.required',
        [this.capitalize(this.$t('registration.labels.password'))]));
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.maxLength && errors.push(this.$t('registration.errors.length',
        [this.capitalize(this.$t('registration.labels.password')), rules.MAX_PASSWORD_LEN]));
      !this.$v.confirmPassword.required && errors.push(this.$t('registration.errors.required',
        [this.capitalize(this.$t('registration.labels.confirm_password'))]));
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      // TODO backend call
    },
    clear() {
      this.$v.$reset();
      this.firstName = '';
      this.lastName = '';
      this.organization = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
    },
  },
  mounted() {
    this.$store.dispatch(gateway.INIT_AUTH_HEADER);
    this.$store.dispatch(gateway.SET_NEW_CLIENT);
    this.$store.dispatch(gateway.GET_STATUS)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
