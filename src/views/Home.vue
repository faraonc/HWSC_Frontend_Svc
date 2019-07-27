<template>
  <div class="home">
    <HelloI18n/>
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import HelloI18n from '@/components/HelloI18n.vue';


@Component({
  components: {
    HelloWorld,
    HelloI18n,
  },
})
export default class Home extends Vue {
}
</script>
