module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {
    categoryId: DataTypes.INTEGER,
  });

  PostsCategory.associate = (models) => {
    PostsCategory.belongsTo(models.Category, {
      foreignKey: 'id', as: 'Categories',
    });
  };

  return PostsCategory;
};
