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
import { AppGatewayServiceRequest } from '@hwsc/hwsc-api-blocks-lisa-test/protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc_pb';
import { AppGatewayServiceClient } from '@hwsc/hwsc-api-blocks-lisa-test/protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svcServiceClientPb';

import HelloI18n from './components/HelloI18n.vue';

@Component({
  components: {
    HelloI18n,
  },
})
export default class App extends Vue {
  client: AppGatewayServiceClient = undefined as any;

  created() {
  }

  mounted() {
    this.client = new AppGatewayServiceClient('http://localhost:50056', null, null);
    this.getStatus();
  }

  getStatus() {
    const request: AppGatewayServiceRequest = new AppGatewayServiceRequest();

    // TODO need to make some sort of metadata interface as a type
    const encodedDummyUser: string = window.btoa(`${process.env.VUE_APP_DUMMY_EMAIL}:${process.env.VUE_APP_DUMMY_PASSWORD}`);
    const metadata = {
      'custom-header-1': 'value1',
      authorization: `Basic ${encodedDummyUser}`,
    };


    this.client.getStatus(request, metadata, (err, res) => {
      console.log('err', err);
      console.log('res', res);
    });
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
