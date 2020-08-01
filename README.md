<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Desafio 02: Conceitos do Node.js
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafios?color=%2304D361">

  <img alt="Made by gabrielleao" src="https://img.shields.io/badge/made%20by-gabrielleao-%2304D361">
</p>

## Sobre o desafio
O objetivo desse desafio é colocar em pratica todo conceito de Node.js aprendido no Nível 2, construindo uma aplicação para armazenar repositório, com a possibilidade
de dar "likes :+1:". Exemplo o `CRUD` abaixo:

 - **C**REATE: Conseguir fazer a criação|cadastro do repositório;
 - **R**EAD: Fazer a listagem dos repositório cadastrados;
 - **U**PDATE: Atualizar titulo, url, tecnologias utilizadas;
 - **D**ELETE: Deletar o repositório desejado;

### :electric_plug: Como usar ? How use? 

**1º** Faça o clone desse projeto, exemplo:

```shell
git clone  https://github.com/gabrielleeao/desafio-conceitos-nodejs.git
```

**2º** Dentro da pasta de um start nas dependência, exemplo;

```shell
yarn / npm
```

**3º** Inicie a aplicação, exemplo;

```shell
yarn dev / npm run dev
```

### :wrench: Como testar ? How to test?

 ```shell
yarn test / npm run test
```

### Endpoints | Rotas da API:

* [Mostrar todos repositórios](docs/get.md) : `[GET] /repositories`
* [Criar um repositório](docs/post.md) : `[POST] /repositories`
* ["Dar" Like no repositório](docs/pk/post.md) : `[POST] /repositories/:id/like`
* [Fazer atualização no repositório](docs/pk/put.md) : `[PUT] /repositories/:id`
* [Deletar o repositório](docs/pk/delete.md) : `[DELETE] /repositories/:id`
