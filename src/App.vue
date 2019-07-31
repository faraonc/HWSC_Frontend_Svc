<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import * as gateway from '@/store/modules/gateway/index';

export default Vue.extend({
  name: 'App',
  data: () => ({
    //
  }),
  created() {
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
});
</script>
