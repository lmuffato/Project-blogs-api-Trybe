module.exports = (sequelize, DataTypes) => sequelize.define('Category', {
  name: DataTypes.STRING,
}, {
  tableName: 'Categories',
  timestamps: false,
});
