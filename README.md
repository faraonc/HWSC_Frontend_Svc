# hwsc-frontend

## Coding Rules & Guidelines

#### General Guidelines
Read through 
[Frontend's wiki pages](https://hwsc-org.github.io/wikis/frontend-svc/general.html) to get started.

#### Vuex Guideline
Read through [Vuex Guideline](https://github.com/hwsc-org/hwsc-frontend/src/store/README.md) to understand
how our state management is organized.

<br>

## Global Tools
Needed to install `vue-cli plugins` and using `vue ui`

```
$ npm install -g @vue/cli
```

## Update dependencies
`npm update --save/--save-dev -f`

<br>

## Local Environment Configurations Required
There are 3 `.env` files required for `testing`, `development`, and `production`:
1. .env.test.local
1. .env.development.local
1. .env.production.local

Config files available in our slack channel

<br>

## Project setup
```
$ npm install
```

<br>

## IDE Linting setup (after npm install)

### JetBrains WebStorm

#### Set `stylelint` for on the fly SCSS linting
1. Install `IntelliJ Stylelint Plugin`:
   - Go to: Preferences > Plugins
   - Go to `Marketplace` tab
   - On search bar, type `stylelint` and press enter
   - Select and Install `IntelliJ Stylelint Plugin`
1. Enable stylelint:
   - Go to: Preferences > Languages & Frameworks > Style Sheets > Stylelint
   - Click on `enable` box
   - Click on `Process JS files` box
   - Click OK
   
#### Set `=eslint` for on the fly eslinting 
1. Go to: Preferences > Languages & Frameworks > JavaScript > Code Quality Tools > Eslint
1. Click on `Automatic ESLint Configuration`
1. Click OK

#### Set `=tslint` for on the fly eslinting 
1. Go to: Preferences > Languages & Frameworks > JavaScript > Code Quality Tools > Eslint
1. Click on `Automatic ESLint Configuration`
1. Click OK

<br>


   
## JetBrains WebStorm Settings to adhere to vue style guideline
#### Remove IDE auto indenting in newlines in `<script>` and `<style>` tag:

1. Preferences > Editor > Code Style > HTML
1. Go to `Other` tabs
1. Under `Do not indent children of`: add `style` and `script`

<br>

## Run projects with CLI commands
### Compiles and hot-reloads for development
```
npm run serve
```

** To make RPC's to work within the app in dev mode, you need to also run services in Docker Container (below)

### Run Services in Docker Containers
Make sure you have [Docker Desktop](https://www.docker.com/products/docker-desktop) installed.
Installing Docker Desktop comes with `docker-compose`.

The following commands will start local docker containers for:
1. postgres db
1. hwsc-app-gateway-svc
1. hwsc-user-svc
1. TODO add more later

Starting at root of `hwsc-frontend`, run the following:

```
$ cd docker
$ docker-compose up
```

You can usually stop your containers successfully with `ctrl + c`.

Sometimes that command will prematurely abort and won't stop all containers. 
In that case follow up with `$ docker-compose stop`.

Or just use `$ docker-compose stop`.

### Compiles and minifies for production
```
npm run build
```

### Compiles and minifies using development .env configuration
* Built files used to deploy in a dev server remotely
```
npm run build:dev
```

### Compiles and minifies using test .env configuration
* TODO: Point to a local `docker-compose` for unit testing in a CI/CD pipeline
```
npm run build:test
```

### Run your tests
```
npm run test
```

### TS Lints and fixes files
```
npm run lint
```

#### Stylelint and fixes files
```
npm run lint:css
```


### Run your end-to-end tests
```
npm run test:e2e
```

#### Run your unit tests
After you run this command, jest will create a `coverage` directory in root of `hwsc-frontend`.
You can view code coverage results in the browser by clicking on index.html and opening in browser.

```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### Run your unit tests
After you run this command, jest will create a `coverage` directory in root of `hwsc-frontend`.
You can view code coverage results in the browser by clicking on index.html and opening in browser.

```
npm run test:unit
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<br>

## Run project using Vue UI
After globally installing `@vue/cli` package, you can launch `Vue UI` which
will open up a browser control panel to:
1. View project plugins/dependencies in depth
1. Make changes on eslint configuration
1. Run, build, test, lint the project

#### To use:
1. In command line: `$ vue ui`
2. Import this project folder

<br>

## Typescript Debugging
`sourceMap` is enabled in `tsconfig.json`, so you can debug using browser dev tools 

[What is sourceMap?](https://www.youtube.com/watch?v=1ZmOTPeZQTM)

## Helpful Links
[Browser compatibility List](https://browserl.ist/)
