# JueXue DAO App

## Quick Start

### Setup Environment

- Node
- yarn
- MongoDB

### Using Yarn

<https://stackoverflow.com/questions/62898770/how-do-i-switch-from-npm-to-yarn-in-my-project>

```sh
# On Windows PowerShell
# As Administrator
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
yarn
```

### Run in Development Environment

```sh
yarn build-run
```

### Development Tips

- Install `prettier`, enable "Format on Save".

#### Port in use

```PowerShell
# Windows
netstat -ano | findstr 3000
taskkill /F /PID 4176
```
