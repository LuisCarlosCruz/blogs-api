# Boas vindas ao repositório do API de Blogs!

# Sumário

- [Habilidades](#habilidades)
  - [O que foi desenvolvido](#o-que-foi-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Para Contribuir](#para-contribuir)
  - [Dicas](#dicas)
  - [Observações importantes](#-observações-importantes)

# Habilidades 

Nesse projeto, foi construido um back-end usando `ORM` com o pacote `sequelize` do `npm`, capaz de:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`

---

## O que foi desenvolvido

Uma API de um CRUD posts de blog (com o Sequelize). Começando pela API, que conta com alguns endpoints (seguindo os princípios do REST) que estarão conectados ao banco de dados.

Primeiro, foi criado uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, uma tabela de Categorias para seus Posts e por fim a tabela de Posts, guardando todas as informações dos posts realizados na plataforma.

---

## Desenvolvimento

Aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

Para fazer um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`. Também será necessário a utilização de categorias para seus posts, assim trabalhando a relação de `posts` para `categorias` e de `categorias` para `posts`.

---

## Para Contribuir

1. Clone o repositório
  * `git clone git@github.com:LuisCarlosCruz/blogs-api.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd blogs-api`

2. Instale as dependências [**Caso existam**]
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-blogs-api`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-blogs-api`

---

## Dicas

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

`/config/config.js`

```
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```
---
## Observações importantes


**(Neste arquivo é obrigatório deixar o nome do database como `"database": 'blogs_api'`)**

**É essencial usar essas 3 variáveis no arquivo acima:**

### Variáveis:

`host: process.env.HOSTNAME`

`user: process.env.MYSQL_USER`

`password: process.env.MYSQL_PASSWORD`

### Variável JWT (opcional):

`JWT_SECRET`

**Também poderá ser utilizada esta variável de ambiente para o SECRET do JWT**

