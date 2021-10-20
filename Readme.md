- Comandos para Startar o MYSQL
  - Status
    - sudo systemctl status mysql
  - Start
    - sudo systemctl start mysql
  - Stop
    - sudo systemctl stop mysql

- Instalar JWT
  - npm install jsonwebtoken

- Instalar o nodemon
  - npm i -D nodemon

- Iniciar sequqlize-cli
  - npx sequelize-cli init

- Criar migration
  - npx sequelize migration:generate --name create-Users

- Criar migration
  - npx sequelize migration:generate --name create-Categories

- Criar migration
  - npx sequelize migration:generate --name create-PostsCategories

- Criar migration
  - npx sequelize migration:generate --name create-BlogPosts

- Criar model
  - npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string
    - O parâmetro --name se refere ao nome da tabela, mas no singular, pois se refere a uma unidade dos dados, como uma linha no banco ou um objeto no seu código javascript;
    - O parâmetro --attributes se refere ao nome das colunas e os tipos de dados que ela contém. Não é preciso definir todas as colunas neste comando, é possível adicioná-las direto no arquivo model.js gerado e na migration equivalente a este model.

-- Dropa o banco
  - npm run drop 

-- Start MYSQL(1)
  - sudo systemctl start mysql

-- Cria o banco e gera as tabelas(2)
  - npm run prestart

-- Insere dados na tabela(3)
  - npm run seed

-- Rodar App
  - npm run debug(4)

- Para rodar as migrations
  - npx sequelize db:migrate

- Para rodar as seeds
  - npx sequelize db:seed:all

- drop dateBase
  - npx sequelize db:drop

- Cria dateBase
  - npx sequelize db:create