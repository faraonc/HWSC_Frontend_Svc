# hwsc-frontend

## Project setup
```
npm install
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

## CLI npm commands
#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
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
