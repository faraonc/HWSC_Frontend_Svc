<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <HelloI18n/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, namespace } from 'vuex-class';

import * as gatewayActions from './store/modules/gateway/actions';
import { gateway } from './store/types';
import HelloI18n from './components/HelloI18n.vue';

const storeGateway = namespace(gateway);

@Component({
  components: {
    HelloI18n,
  },
})
export default class App extends Vue {
  @storeGateway.Action(gatewayActions.getStatus.name) storeGetStatus: any;

  @storeGateway.Action(gatewayActions.setNewClient.name) storeSetNewClient: any;

  @storeGateway.Action(gatewayActions.initAuthHeader.name) storeInitAuthHeader: any;

  created() {
    this.storeSetNewClient();
    this.storeInitAuthHeader();
    this.storeGetStatus();
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
