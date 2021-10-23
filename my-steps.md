0. Pacotes instalados

Obs.: Pode acontecer de mesmo após fechar a aplicação no terminal, retornar um erro afirmando que a porta 3000 já está em uso. Para resolver isso, basta usar o comando abaixo no terminal:

```
killall node
```

Instalar o pacote nodemon como dependência de desenvolvimento
```
npm install --save-dev nodemon
```

Alterar o package.json para rodar o nodemon
```
//...
// "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "nodemon index.js"
//  },
// ...
```
Para inicar a aplicação pelo nodemon, utilize o comando abaixo
```
npm run dev
```

Instalar o pacote do sequelize-CLI
```
npm install sequelize-cli
```
Instalar o pacote para geração e validação de tokens jwt
```
npm install jsonwebtoken
```

1. Definir a estrutura do banco de dados
```
database: blogs_api

tabelas: [

  users:
  {
    id: INTERGER,        // (original)
    displayName: STRING, // (original)
    email: STRING,       // (original)
    password: STRING,    // (original)
    image: STRING,       // (original)
  },
  Categories:
  {
    id: INTERGER,        // (original)
    name:  STRING,       // (original)
  },
  PostsCategories:
  {
    postId: INTERGER,    // (compartilhado)
    categoryId:  STRING, // (compartilhado)
  },
  BlogPosts:
  {
    id: INTERGER,         // (original)
    title: STRING,        // (original)
    content: STRING,      // (original)
    userId: INTERGER,     // (compartilhado)
    published: DATE,      // (original)
    updated: DATE,        // (automatico)
  },
],

Users : BlogPost -> 1:N
BlogPost : Users -> 1:1
Categories: BlogPosts -> N:N
PostsCategories (tabela intermediária)
```

2. Configurar o arquivo config.json ou criar e configurar o arquivo config.js

3. Criar o bando de dados
```
npx sequelize db:create
```

4. Criar as migrations

IMPORTANTE: As migrations devem ser criadas seguindo a sequênica de dependência. Por exemplo, se a migration A tem uma chave extrangeira na migration da tabela B, então a tabela B deve ser migrada antes da migration A.

```
npx sequelize migration:generate --name create-users
npx sequelize migration:generate --name create-categories
npx sequelize migration:generate --name create-blogPosts
npx sequelize migration:generate --name create-postsCategories
```

5. Configurar as migrations e exportar
```
npx sequelize db:migrate
```
5.1. para desfazer as migrations
```
npx sequelize db:migrate:undo:all
```
6. Criar e configurar as models
Cada migration deve ter sua model associada. A model é criada pelo usuário, e recomenda-se utilizar o nome da tabela ao qual ela será associada, poré, no singular.

7. Povoar o banco de dados para teste, através dos seeders

7.1 Criar as seerds de cada tabela;
```
npx sequelize seed:generate --name <nome>
```

7.2 Configurar as seeders

7.3 Executar o comando para povoar as tabelas com os dados das seeders
```
npx sequelize db:seed:all
```

7.3.1 Em caso de erro, execute o comando abaixo para desfazer o povoamento:
```
npx sequelize db:seed:undo:all
```

8. Verificando se a importação foi feita corretamente
Executar os comandos abaixo no SQL ou MySQLWorkBench para verificar se as tabelas foram criadas corretamente, com seus respectivos campos e se o povamento aconteceu corretamente.

IMPORTANTE: Após fazer as modificações no sequelize, deve-se atualizar (refresh) no banco de dados, para que as alterações sejam carregadas. Caso contrário, pode travar a aplicação, precisando reiniciar.

```SQL
SELECT * FROM blogs_api.Users;
SELECT * FROM blogs_api.Categories;
SELECT * FROM blogs_api.BlogPosts;
SELECT * FROM blogs_api.PostsCategories;
```
