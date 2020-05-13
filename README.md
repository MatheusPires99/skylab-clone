<h1 align="center">
    <img alt="Skylab-Clone" src="https://ik.imagekit.io/hwyksvj4iv/skylab-logo_Npl4-pqEs.svg" width="250px" />
</h1>

<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-iniciando-front-end">ReactJS</a>
</>

<p align="center">
  <img alt="Skylab-Clone" src="https://res.cloudinary.com/matheuspires/image/upload/v1589338040/skylab-clone_pkzuxf.gif" />
  <br />
  <br />
  <a href="https://skylab-clone.netlify.app/">Demo da aplicação</a>
</p>

## :page_with_curl: Sobre
Este repositório contém uma aplicação em ReactJS utilizando TypeScript.

Essa é a aplicação clone do Skylab, a plataforma de aulas da [Rocketseat](https://rocketseat.com.br/). Fiz o clone de apenas algumas telas da plataforma, como o listagem de cursos, listagem de aulas do curso Starter, dashboard do curso GoStack e a listagem de aulas do curso GoStack.

Nesse projeto tive o objetivo de aprimorar minhas habilidades em construção de interfaces e layouts responsivos ultilizando a biblioteca styled-components. Outra biblioteca muito utilizada foi a Skeleton, para efeitos de carregamento enquanto uma requisição a API fake é feita. 

## :hammer: Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [Axios](https://github.com/axios/axios)
- [Styled Components](https://styled-components.com/)
- [JSON Server](https://github.com/typicode/json-server)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [Skeleton Loading](https://www.npmjs.com/package/react-loading-skeleton)
- [Polished](https://www.npmjs.com/package/polished)

## :books: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.

## :rocket: Começando
``` bash
  # Clonar o projeto:
  $ git clone https://github.com/MatheusPires99/skylab-clone

  # Entrar no diretório:
  $ cd skylab-clone/frontend
```

## :gear: Iniciando server
  Para iniciar o server na aplicação crie um arquivo chamado .env na raiz da pasta frontend

  Dentro desse arquivo, você pode colocar na variável ambiente **REACT_APP_API_URL** duas opções:

  - http://localhost:3333 -> Caso queira rodar o projeto totalmente local. Para isso, rode o comando: 
  ```bash 
    json-server server.json -p 3333
  ````
  - https://my-json-server.typicode.com/MatheusPires99/skylab-clone -> Caso queria usar o meu server.

## :computer: Iniciando front-end
```bash
  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn start
```

Feito com ❤️ por Matheus Pires 👋🏻 [Get in touch!](https://github.com/MatheusPires99)
