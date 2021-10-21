const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    // createdAt: { type: DataTypes.DATE, defaultValue: sequelize.NOW },
  }, { 
    timestamps: false,
    // createdAt: false,
    // updatedAt: 'updateTimestamp',
  });
  user.associate = (models) => {
    user.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      // Se hasMany a foreignKey será da tabela target(BlogPost)
      as: 'post',
    });
  };

  return user;
};

module.exports = User;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   User.init({
//     displayName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     image: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };