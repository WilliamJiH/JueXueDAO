# frontend

### Compile and run in development mode:

```
cd frontend
npm install && npm run serve
```

App should be running at http://localhost:8080/

### Install and use 3rd-party libraries:

Do NOT use 3rd-party official installation, use the one with vue-cli.
For example, if we want to install element-ui, use:

```
vue add element
```

### Completely disable ESLint in vue-cli

We do NOT need ESLint, but it's installed by default.
If you don't remove it, there may be compilation errors.

```
npm remove @vue/cli-plugin-eslint
```

### Compiles and minifies for production

```
cd frontend
npm install && npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
