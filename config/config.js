module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'TRYBE',
    password: process.env.MYSQL_PASSWORD || 'Hc789456@',
    database: 'blogs_api',
    host: process.env.HOSTNAME || '127.0.0.1',
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