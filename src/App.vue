<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { appGatewayModuleName } from './store/modules';
import * as appGatewayActions from './store/modules/app-gateway/actions';

const storeAppGateway = namespace(appGatewayModuleName);

@Component
export default class App extends Vue {
    @storeAppGateway.Action(appGatewayActions.getStatus.name) storeGetStatus: any;

    @storeAppGateway.Action(appGatewayActions.setNewClient.name) storeSetNewClient: any;

    @storeAppGateway.Action(appGatewayActions.initAuthHeader.name) storeInitAuthHeader: any;

    created() {
      this.storeSetNewClient();
      this.storeInitAuthHeader();
      this.storeGetStatus();
    }
}
</script>
