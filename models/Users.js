const user = (sequelize, DataTypes) => {
  const userModel = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  userModel.associate = (model) => {
    userModel.hasMany(model.BlogPosts, {
      foreignKey: 'userId', as: 'blogPosts',
    });
  };
  return userModel;
};

module.exports = user;