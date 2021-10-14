/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    displayName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false });
  User.associate = (models) => {
    User.hasMany(models.BlogPost);
  };
  return User;
};