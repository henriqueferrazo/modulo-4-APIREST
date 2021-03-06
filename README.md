<br />
<p align="center">
    <img src="./readme/download.jpg" alt="Logo" width="150">

  <h3 align="center">API Hotel com Node, Express, Sequelize e SQLite</h3>
 <br />
  <p align="center">
     Sumário
      <p align="center">
  <a href="#sobre"> Sobre </a> |
  <a href="#conhecimentos-praticados"> Conhecimentos praticados </a> |
  <a href="#rotas-da-aplicação"> Rotas da aplicação </a> |
  <a href="#tecnologias-utilizadas"> Tecnologias utilizadas </a>      
       <br />
    <br />
  </p>
</p>


# Sobre
O objetivo do projeto foi criar uma API para um hotel utilizando Node, Express, Sequelize e SQLite como projeto final do Módulo 4 da Turma 10 do curso de Desenvolvimento Web Fullstack Resilia.

Cada integrante do grupo ficou responsável pela criação de uma API referente à um dos serviços do hotel. 

Sendo eles: franquias, funcionários, cardápio, filiais e quartos.

Nesta aplicação é possível cadastrar, listar, atualizar e deletar franquias.

# Conhecimentos Praticados
✔ NodeJs <br>
✔ Express <br>
✔ SQLite3 <br>
✔ Sequelize <br>
✔ CRUD com Sequelize <br>
✔ Padrão MVC <br>
✔ Testes Unitários e Teste de Integração


# Rotas da aplicação:

## Franquias

<b>[GET] </b> /franquias - A rota deve exibir todos os franquias cadastrados.<br>

<b>[GET] </b> /franquias/id - A rota deve listar um franquias baseado em seu ID.<br>

<b>[POST] </b> /franquias/registrar - A rota deve cadastrar uma franquia com as informações passadas no body da requisição.<br>

```javascript
{
"gestor": "Teste",
"endereco": "Teste",
"estado": "teste",
"cidade": "teste",
"cep": "00000000",
"tem_piscina": "sim",
"tem_academia":"nao"
}
```

<b>[PATCH] </b> /franquias/id - A rota deve atualizar um cliente com as informações passadas no body da requisição. Caso necessário apenas uma informação pode ser atualizada por vez.<br>

```javascript
{
"gestor": "Teste",
"endereco": "Teste",
"estado": "teste",
"cidade": "teste",
"cep": "00000000",
"tem_piscina": "sim",
"tem_academia":"nao"
}
```

<b>[DELETE] </b> /franquias/id - A rota deve deletar uma franquia baseado em seu ID.<br>

# Validação de dados
 Foi adicionada as seguintes validações para os dados recebidos nas requisições: <br><br>
 <b>[POST] </b> /franquias/registrar <br>
   - Todos os campos precisam ser uma string

 <b>[PATCH] </b> /franquias/id
   - Todos os campos podem ser atualizados ao mesmo tempo, bem como um campo de cada vez.
   - Todos os campos devem ser uma string.
 
 
 

# Rodando o projeto:

### Pré-requisitos:
Antes de começar, você precisará instalar em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/). <br> Além disso, é aconselhável ter um editor como o [VSCode](https://code.visualstudio.com/) para trabalhar com o código!

### Instalando e rodando o projeto:


```
# Clone este repositório
$ git clone https://github.com/henriqueferrazo/modulo-4-APIREST.git

# Acesse a pasta do projeto no terminal
$ cd modulo-4-APIREST

# Instale as dependências do projeto
$ npm install

# Inicie o servidor da aplicação
$ npm start

# Utilize o Insomnia ou o Postman para realizar as requisições nas rotas na URL:
http://localhost:3333/



```

# Tecnologias utilizadas: 
<p align="center">
<a href="https://nodejs.org/en/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="40" /></a> <a href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" height="40" width="40" /></a> <a href="https://insomnia.rest/download"><img src="https://raw.githubusercontent.com/brunoandreotti/biblioteca-backend/79c23c6a4bdd0bc6cb95463ee47741f2226cb0b1/readme/insomnia.svg" height="40" width="40" /></a> <a href="https://sequelize.org"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="40" /></a> <a href="https://www.sqlite.org/index.html"><img src="./readme/sqlite-icon.svg" height="40" width="40" /></a> 



---
**Desenvolvido por <a href="https://www.linkedin.com/in/bruno-andreotti/"> Bruno Andreotti</a>, <a href="https://www.linkedin.com/in/denise-g-oliveira/"> Denise Oliveira </a>, <a href="https://www.linkedin.com/in/heitorschumann/"> Heitor Schumann </a>, <a href="https://www.linkedin.com/in/henrique-ferraz-a46123219/"> Henrique Ferraz </a>, <a href="https://www.linkedin.com/in/murilo-antunes-bb1143228/"> Murilo Antunes </a>.**

