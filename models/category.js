module.exports = (sequelize, DataTypes) => {
  const Category = (sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  }, { timestamps: false, primaryKey: true, tableName: 'Categories' }));
  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, {
      foreignKey: 'id', as: 'Categories',
    });
  };
  return Category;
};