# JueXue DAO App

## About

### JueXue DAO

// TODO: 

### Conflux - BeiDou Program

BeiDou (北斗) is a blockchain entrepreneurship camp hosted by the Shanghai Tree Map Blockchain Research Institute and the Conflux Blockchain Foundation.

### Built with

- Express.js (TypeScript)
- Vue 2
- Solidity
- [Conflux Blockchain](https://confluxnetwork.org/)

## Quick Start

### Setup Environment

#### Requirements

- Node
- yarn

#### Using Yarn

<https://stackoverflow.com/questions/62898770/how-do-i-switch-from-npm-to-yarn-in-my-project>

```sh
# Windows PowerShell (Administrator)
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```

#### Install dependencies

```sh
yarn
```

#### Run in Development Environment

- Ask for `.env` and put under project root directory.

```sh
yarn build
yarn start
```

### Development Tips

- Install `prettier`, enable "Format on Save".

#### Error: Port is being used

```PowerShell
# Windows
netstat -ano | findstr 3000
taskkill /F /PID 4176
```
