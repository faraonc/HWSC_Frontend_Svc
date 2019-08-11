<template>
  <form>
    <!--  TODO:  Labels use internalization texts    -->
    <v-text-field
      v-model="firstName"
      :error-messages="nameErrors"
      :counter="32"
      :label="$t('registration.labels.first_name') | capitalize"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    />
    <v-text-field
      v-model="lastName"
      :error-messages="nameErrors"
      :counter="32"
      :label="$t('registration.labels.last_name') | capitalize"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    />
    <v-text-field
      v-model="organization"
      :error-messages="nameErrors"
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
      :counter="60"
      :label="$t('registration.labels.password') | capitalize"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    />
    <v-text-field
      v-model="confirmPassword"
      :error-messages="passwordErrors"
      :counter="60"
      :label="$t('registration.labels.confirm_password') | capitalize"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    />
    <v-btn
      class="mr-4"
      @click="submit"
    >
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

export default {
  mixins: [validationMixin],
  validations: {
    name: {
      required,
      maxLength: maxLength(32),
    },
    organization: {
      required,
      maxLength: maxLength(32),
    },
    email: {
      required,
      email,
      maxLength: maxLength(320),
    },
    password: {
      required,
      maxLength: maxLength(60),
    },
  },
  data: () => ({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push('Name must be at most 32 characters long');
      !this.$v.name.required && errors.push('Name is required.');
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength && errors.push('Password must be at most 60 characters long');
      !this.$v.password.required && errors.push('Password is required.');
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = '';
      this.organization = '';
      this.email = '';
      this.password = '';
      this.passwordConfirm = '';
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>
