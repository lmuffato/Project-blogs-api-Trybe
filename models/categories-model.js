module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });
    Categories.associate = (model) => {
      Categories.hasMany(model.PostsCategory, {
        foreignKey: 'categoryId', as: 'categories',
      });
    }; 
  return Categories;
};
