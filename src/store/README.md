# Store Guide
This file outlines the best practices for Vuex

## Files
The types files will help us utilize IDE's suggestion tool. It gives us an overview of what is available.

Each store module will contain the following files:
1. `index.ts`
1. `states.ts`
1. `getters.ts`
1. `actions.ts`
1. `mutations.ts`
1. `types-mutations.ts`
1. `types.ts`

### index.ts
Entry point for the store.

Because we are splitting our stores into [modules](https://vuex.vuejs.org/guide/modules.html),
there is `index.ts` for each store modules to import its own States, Actions, Getters, and Mutations.
Each of these modules is namespaced to the `module` name and is defined in its `index.ts`

e.g. The module below is namespaced to **appGateway**, from the line `export const appGateway...`:
```ts
export const appGateway: Module<ModuleState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};
```

There is `index.ts` at root of the store to bring all other store modules together.

### states.ts
Contains the state of the store. Best to design state before you start coding.

Any special type definitions are defined in its `types.ts` file as interfaces.

[Learn about Vuex State](https://vuex.vuejs.org/guide/state.html)

### getters.ts
TODO

### actions.ts
Contains exported defined action methods for the store module.

The difference between `mutations` and `actions` is that `actions` contains the heavy logic, 
`mutations` does not contain logic but just changes state.
 
Actions should not mutate any state directly. Any state that needs to be mutated in actions
should be committed using `commit()`.

[Learn about Vuex Actions](https://vuex.vuejs.org/guide/actions.html)

#### Calling actions from `vue components`
We use binding helpers from [vuex-class](https://github.com/ktsn/vuex-class#example)

e.g.: To bind and use `appGateway` module actions:

```ts
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, namespace } from 'vuex-class';
import * as gatewayActions from './store/modules/app-gateway-svc/actions';
import { appGateway } from './store/root-types';

const storeAppGateway = namespace(appGateway);

@Component
export default class App extends Vue {
  @storeAppGateway.Action(gatewayActions.getStatus.name) storeGetStatus: any;
  @storeAppGateway.Action(gatewayActions.setNewClient.name) storeSetNewClient: any;
  @storeAppGateway.Action(gatewayActions.setNewHttpHeader.name) storeSetNewHttpHeader: any;

  created() {
    // to use it
    this.storeSetNewClient();
    this.storeSetNewHttpHeader();
    this.storeGetStatus();
  }
}
```


### mutations.ts
Contains defined mutation methods for the store module.

Mutation method names are defined as const strings in `types-mutations.ts` and are referenced from that file.

Mutations should only mutate a state, it should not contain any logic.
If you need to do some logic work, make an action, and then `commit()` the mutations.

Do not make `commits` from `vue components` or anywhere else other than in `actions`. 

Always use an `action` to `commit a mutation`.

### types-mutations.ts 
Contains exported const strings that `mutations.ts` references for its mutation names.

This file helps display IDE suggestion box of mutations available when using it in `vue components`. 
It also helps give you an at-a-glance view of all mutations in the module.

[Learn about Vuex mutations](https://vuex.vuejs.org/guide/mutations.html)

### types.ts
Contains general types and interfaces specific to the module
