// 'use strict';
// Mensagem do Eslint: 'use strict' is unnecessary inside of modules

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false });
  
  return Users;
};