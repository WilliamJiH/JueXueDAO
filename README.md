
<div align="center">
<h1>
    JueXue DAO App
</h1>
![GitHub language count](https://img.shields.io/github/languages/count/WilliamJiH/JueXueDAO)
![GitHub top language](https://img.shields.io/github/languages/top/WilliamJiH/JueXueDAO)
![GitHub issues](https://img.shields.io/github/issues/WilliamJiH/JueXueDAO)

![Contributors](https://img.shields.io/github/contributors/WilliamJiH/JueXueDAO)
![GitHub Repo stars](https://img.shields.io/github/stars/WilliamJiH/JueXueDAO?style=social)
</div>

## About

JueXue DAO App is a web application relying on the Conflux Blockchain for supporting and facilitating the development of JueXue DAO.

This is a hackathon project created by a group of four students from the University of Toronto.

### JueXue DAO

*JueXue DAO* is a **decentralized academic open source dao community** that serves the scholars.

***Decentralization***: We assign *value* to *knowledge* through *smart contracts*. Decentralization can protect intellectual property rights of scholars and scholars can benefit from smart contracts when they create documents.

***Academic Open Source***: Our platform does not rely on readers' subscription fees to generate revenue, so all academic articles on our platform can be read and browsed for free. Make the dissemination of knowledge easier.

***DAO Community***: Different from many DAO communities which centered on financial commodities, our core is to help scholars create more valuable literature. Members of the community can vote on platform rules, exchange learning, and access academic resources provided by the platform.

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

#### Running Server in Development Environment

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
