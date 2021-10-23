require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME || '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME || '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME || '127.0.0.1',
    dialect: 'mysql',
  },

};

/* Para configurar o uso das variáveis de ambiente:

1. Instalar o pacote doenv

npm install dotenv;

2. Criar o arquivo .evn com as variáveis de ambiente

PORT=3000
HOSTNAME=localhost
MYSQL_USER=trybe
MYSQL_PASSWORD=12345678

3. Criar o arquivo config.js que receberá as variáveis

Este arquivo

4. Modificar o arquivo index.js da pasta models.

// Linha 8 - Antes
const config = require(__dirname + '/../config/config.json')[env];

// Linha 8 - Depois
const config = require(__dirname + '/../config/config.js')[env];

*/
