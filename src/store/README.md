# Store Guide
This file outlines the best practices for Vuex

## Files
The types files will help us utilize IDE's suggestion tool. It gives us an overview of what is available.

Each store module will contain the following files:
1. `index.ts`
2. `state.ts`
3. `getters.ts`
4. `actions.ts`
5. `mutations.ts`
6. `types-mutations.ts`

### index.ts
Entry point for the store.

Because we are splitting our stores into [modules](https://vuex.vuejs.org/guide/modules.html),
there is `index.ts` for each store modules to import its own States, Actions, Getters, and Mutations.
Each of these modules is namespaced to the `module` name and is defined in its `modules.ts`

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

### state.ts
Contains the state of the module and is shared with all the `vue components`. 
Best to design state before you start coding.

Any special type definitions are defined in its `types.ts` file as interfaces.

[Learn about Vuex State](https://vuex.vuejs.org/guide/state.html)

### getters.ts
TODO

### actions.ts
Contains exported defined action methods for the store module.

`Actions` is the business logic and can commit multiple `mutations` at a time. 
`Mutations` may have logic dealing with mutating the state.
 
Actions should not mutate any state directly. Any state that needs to be mutated in actions
should be committed using `commit()`.

[Learn about Vuex Actions](https://vuex.vuejs.org/guide/actions.html)

#### Calling actions from `vue components`
We use binding helpers from [vuex-class](https://github.com/ktsn/vuex-class#example)

e.g.: To bind and use `appGateway` module actions:

```ts
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, namespace } from 'vuex-class';
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

### modules.ts
Stores and exports module names
