## 📗 Sobre

Projeto desenvolvido para o módulo de Desenvolvimento Back-end da Trybe, onde estudamos os princípios da Arquitetura SOLID e ORM (Interface da aplicação com o banco de dados e Associations).

Nesse projeto, praticamos o desenvolvimento de um back-end usando `ORM` com o pacote `sequelize` do `npm`, mostrando que após as aulas, nós somos capazes de:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criamos
 - Fazer um `CRUD` com o `ORM`

**Módulo**: Desenvolvimento Back-end

**Bloco**: Arquiterura: SOLID e ORM

## O que foi desenvolvido

Foi arquiteturado e desenvolvido uma API de um CRUD posts de blog (com o sequelize). Começando pela API, desenvolvemos alguns endpoints (seguindo os princípios do REST) que estão conectados ao banco de dados, aplicando os princípios SOLID!

Primeiro, criamos uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, criamos também uma tabela de Categorias para seus Posts e por fim a tabela de Posts, guardando todas as informações dos posts realizados na plataforma.

Para fazer um post é necessário usuário e login, portanto foi trabalhada a **relação entre** `user` e `post`. Também foi necessário a utlização de categorias para seus posts, assim trabalhando a relação de `posts` para `categorias` e de `categorias` para `posts`.

## 🚀 Demo

Em breve

## 🖼 Captura de tela

Em breve

## 🛠 Instalação

- Realize o clone do projeto com o comando:
```bash
git clone git@github.com:rafaelgeronimo/trybe-project-blogs-api.git
```

- Instale o projeto com `npm` ou `yarn`:
```bash
cd trybe-project-blogs-api

## instalando com o npm:
npm install

## instalando com o yarn:
yarn install
```

- Configurando as variáveis de ambiente:
Para que esse projeto funcione adequadamente no seu ambiente, será necessário criar o arquivo `.env` na raíz do projeto, contendo os dados de acesso ao banco de dados MySQL:

```
# Banco de dados
MYSQL_USER=nome_de_user_do_mysql
MYSQL_PASSWORD=senha_de_user_do_mysql
HOSTNAME=endereco_do_servidor_mysql(localhost ou outro)

# JWT
JWT_SECRET=senha_aleatória_para_criptografia
```

## 💻 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- NodeJs
- Express
- MySQL
- SOLID
- ORM Sequelize

## Requisitos do projeto

### Requisitos obrigatórios

<details>
  <summary>
    1. Sua aplicação deve ter o endpoint POST <kbd>/user</kbd>
  </summary>
  <ul>
    <li>
      O endpoint deve ser capaz de adicionar um novo user a sua tabela no banco de dados;
    </li>
    <li>
      O corpo da requisição deverá ter o seguinte formato:
      <pre>
        {
          "displayName": "Brett Wiltshire",
          "email": "brett@email.com",
          "password": "123456",
          "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
        }
      </pre>
    </li>
    <li>
      O campo <kbd>displayName</kbd> deverá ser uma string com no mínimo de 8 caracteres;
    </li>
    <li>
      O campo <kbd>email</kbd> será considerado válido se tiver o formato <kbd><prefixo>@<domínio></kbd> e se for único. Ele é obrigatório.
    </li>
    <li>
      A senha deverá conter 6 caracteres. Ela é obrigatória.
    </li>
    <li>
      Caso exista uma pessoa com o mesmo email na base, deve-se retornar o seguinte erro:
      <pre>
        {
          "message": "User already registered"
        }
      </pre>
    </li>
    <li>
      Caso contrário, retornar a mesma resposta do endpoint de <kbd>/login</kbd>, um token <kbd>JWT</kbd>:
      <pre>
        {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
        }
      </pre>
      <em>O token anterior é fictício</em>
    </li>
  </ul>
</details>
<details>
  <summary>
    2. Sua aplicação deve ter o endpoint POST <kbd>/login</kbd>
  </summary>
  <ul>
    <li>
      O corpo da requisição deverá seguir o formato abaixo:
      <pre>
        {
          "email": "email@mail.com",
          "password": "123456"
        }
      </pre>
    </li>
    <li>
      Caso algum desses campos seja inválido ou não exista um usuário correspondente no banco de dados, retorne um código de status 400 com o corpo <kbd>{ message: "Campos inválidos" }</kbd>.
    </li>
    <li>
      Caso esteja tudo certo com o login, a resposta deve ser um token <kbd>JWT</kbd>, no seguinte formato:
      <pre>
        {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
        }
      </pre>
      <em>O token anterior é fictício</em>
    </li>
  </ul>
</details>
<details>
  <summary>
    3. Sua aplicação deve ter o endpoint GET <kbd>/user</kbd>
  </summary>
  <ul>
    <li>
      Deve listar todos os <strong>Users</strong> e retorná-los na seguinte estrutura:
      <pre>
        [
          {
            "id": "401465483996",
            "displayName": "Brett Wiltshire",
            "email": "brett@email.com",
            "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
          }
        ]
      </pre>
    </li>
    <li>
      A requisição deve ter token de autenticação nos headers e, caso contrário, retorne um código de <kbd>status 401</kbd>.
    </li>
  </ul>
</details>
<details>
  <summary>
    4. Sua aplicação deve ter o endpoint GET <kbd>/user/:id</kbd>
  </summary>
  <ul>
    <li>
      Retorna os detalhes do usuário baseado no <kbd>id</kbd> da rota. Os dados devem ter o seguinte formato:
      <pre>
        {
          "id": "401465483996",
          "displayName": "Brett Wiltshire",
          "email": "brett@email.com",
          "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
        }
      </pre>
    </li>
    <li>
      A requisição deve ter token de autenticação nos headers e, caso contrário, retorne um código de <kbd>status 401</kbd>.
    </li>
  </ul>
</details>
<details>
  <summary>
    5. Sua aplicação deve ter o endpoint POST <kbd>/categories</kbd>
  </summary>
  <ul>
    <li>
      Esse endpoint deve receber uma _Categoria_ no corpo da requisição e criá-la no banco. O corpo da requisição deve ter a seguinte estrutura:
      <pre>
        {
          "name": "Inovação"
        }
      </pre>
    </li>
    <li>
      Caso a Categoria não contenha o <kbd>name</kbd> a API deve retornar um erro de <kbd>status 400</kbd>.
    </li>
    <li>
      A requisição deve ter o token de autenticação nos headers e, caso contrário, retorne um código de <kbd>status 401</kbd>.
    </li>
  </ul>
</details>
<details>
  <summary>
    6. Sua aplicação deve ter o endpoint GET <kbd>/categories</kbd>
  </summary>
  <ul>
    <li>
      Esse endpoint deve listar todas as Categorias e retorná-las na seguinte estrutura:
      <pre>
        [
          {
            "id": 1,
            "name": "Escola"
          },
          {
            "id": 2,
            "name": "Inovação"
          }
        ]
      </pre>
    </li>
  </ul>
</details>
<details>
  <summary>
    7. Sua aplicação deve ter o endpoint POST </kbd>/post</kbd>
  </summary>
  <ul>
    <li>
      Esse endpoint deve receber um _BlogPost_ no corpo da requisição e criá-lo no banco. O corpo da requisição deve ter a seguinte estrutura:
      <pre>
        {
          "title": "Latest updates, August 1st",
          "content": "The whole text for the blog post goes here in this key",
          "categoryIds": [1, 2]
        }
      </pre>
    </li>
    <li>
      Caso o post não contenha o <kbd>title</kbd>, <kbd>content</kbd> ou <kbd>categoryIds</kbd> a API deve retornar um erro de <kbd>status 400</kbd>.
    </li>
    <li>
    </li>
    <li>
      A requisição deve ter o token de autenticação nos headers e, caso contrário, retorne um código de <kbd>status 401</kbd>.
    </li>
  </ul>
</details>
<details>
  <summary>
    8. Sua aplicação deve ter o endpoint GET <kbd>/post</kbd>
  </summary>
  <ul>
    <li>
      Esse endpoint deve listar todos os _BlogPosts_ e retorná-los na seguinte estrutura:
      <pre>
        [
          {
            "id": 1,
            "title": "Post do Ano",
            "content": "Melhor post do ano",
            "userId": 1,
            "published": "2011-08-01T19:58:00.000Z",
            "updated": "2011-08-01T19:58:51.000Z",
            "user": {
              "id": 1,
              "displayName": "Lewis Hamilton",
              "email": "lewishamilton@gmail.com",
              "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2017_Malaysia.jpg"
            },
            "categories": [
              {
                "id": 1,
                "name": "Inovação"
              }
            ]
          }
        ]
      </pre>
    </li>
  </ul>
</details>
<details>
  <summary>
    9. Sua aplicação deve ter o endpoint GET </kbd>post/:id</kbd>
  </summary>
  <ul>
    <li>
      Retorna um **BlogPost** com o <kbd>id</kbd> especificado. O retorno deve ter os seguinte formato:
      <pre>
        {
          "id": 1,
          "title": "Post do Ano",
          "content": "Melhor post do ano",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          "categories": [
            {
              "id": 1,
              "name": "Inovação"
            }
          ]
        }
      </pre>
    </li>
  </ul>
</details>
<details>
  <summary>
    10. Sua aplicação deve ter o endpoint PUT <kbd>/post/:id</kbd>
  </summary>
  <ul>
    <li>
      O endpoint deve receber um **BlogPost** que irá sobrescrever o original com o </kbd>id<kbd> especificado na URL. Só deve ser permitido para o usuário que criou o **BlogPost**.
    </li>
    <li>
      A(s) categoria(s) do post **não** podem ser editadas, somente o </kbd>title<kbd> e </kbd>content<kbd>.
    </li>
    <li>
      O corpo da requisição deve ter a seguinte estrutura:
      <pre>
        {
          "title": "Latest updates, August 1st",
          "content": "The whole text for the blog post goes here in this key"
        }
      </pre>
    </li>
    <li>
      Caso uma pessoa diferente de quem criou faça a requisição, deve retornar um código </kbd>status 401<kbd>.
    </li>
    <li>
      Caso uma requisição sem token seja recebida, deve-se retornar um código de </kbd>status 401<kbd>.
    </li>
    <li>
      Caso o post não contenha o </kbd>title<kbd> e/ou o </kbd>content<kbd> a API deve retornar um erro de </kbd>status 400<kbd>.
    </li>
  </ul>
</details>

### Requisitos Bônus

<details>
  <summary>
    11. Sua aplicação deve ter o endpoint DELETE </kbd>post/:id</kbd>
  </summary>
  <ul>
    <li>
      Deleta o post com o <kbd>id</kbd> especificado. Só deve ser permitido para o usuário que criou o **BlogPost**.
    </li>
    <li>
      Caso uma pessoa diferente de quem criou faça a requisição, deve retornar um código <kbd>status 401</kbd>.
    </li>
    <li>
      Caso uma requisição sem token seja recebida, deve-se retornar um código de <kbd>status 401</kbd>.
    </li>
    <li>
      Caso o post referido não exista, deve-se retornar um código de <kbd>status 404</kbd>.
    </li>
  </ul>
</details>
<details>
  <summary>
    12. Sua aplicação deve ter o endpoint DELETE <kbd>/user/me</kbd>
  </summary>
  <ul>
    <li>
      Utilizando o token de autenticação nos headers, o usuário correspondente deve ser apagado.
    </li>
  </ul>
</details>
<details>
  <summary>
    13. Sua aplicação deve ter o endpoint GET </kbd>post/search?q=:searchTerm</kbd>
  </summary>
  <ul>
    <li>
      Retorna uma array de **BlogPosts** que contenham em seu título, ou conteúdo, o termo pesquisado no <kbd>queryParam</kbd> da URL. O retorno deve ter o seguinte formato:
      <pre>
        [
          {
            "id": 2,
            "title": "Vamos que vamos",
            "content": "Foguete não tem ré",
            "userId": 1,
            "published": "2011-08-01T19:58:00.000Z",
            "updated": "2011-08-01T19:58:51.000Z",
            "user": {
              "id": 1,
              "displayName": "Lewis Hamilton",
              "email": "lewishamilton@gmail.com",
              "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
            },
            "categories": [
              {
                "id": 2,
                "name": "Escola"
              }
            ]
          }
        ]
      </pre>
    </li>
    <li>
      Caso nenhum **BlogPost** satisfaça a busca, retorne um array vazio.
    </li>
  </ul>
</details>

### Execução de testes unitários

Estamos usando o  Jest para executar os testes. Para executá-lo, use o comando a seguir: 

```sh
## npm
npm test

## yarn
yarn test
```

Caso queria executar só um arquivo de test use o seguinte comando, considerado que quer testar o arquivo `tests/req07-createPost.test.js`:

```sh
## npm
npm test tests/req07-createPost.test.js

## ou

npm test req07

## yarn 

yarn test tests/req07-createPost.test.js

## ou

yarn test req07
```

---

## Linter

Para garantir a qualidade do código, usamos o [ESLint](https://eslint.org/) para fazer a sua análise estática.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

Para poder rodar os `ESLint` basta executar o comando `npm run lint` ou `yarn lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você também pode instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).