# hwsc-frontend

## Global Dependencies
At the time of this writing, Vue CLI version was `v4.0.0-alpha.0`.

```
$ npm install -g @vue/cli
```

<br>

## Local Environment Configurations Required
There are 3 `.env` files required for `testing`, `development`, and `production`:
1. .env.test.local
1. .env.dev.local
1. .env.prod.local

Config files available in our slack channel

<br>

## Project setup
```
$ npm install
```

<br>

## IDE Linting setup (after npm install)

### JetBrains WebStorm (v: 2019.1.1)

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
   
#### Set `eslint` for on the fly eslinting 
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

## Run projects with CLI npm commands
#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
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

#### Run your tests
```
npm run test
```

#### ES Lints and fixes files
```
npm run lint
```

#### Stylelint and fixes files
```
npm run lint:css
```

#### Run your end-to-end tests
```
npm run test:e2e
```

#### Run your unit tests
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
