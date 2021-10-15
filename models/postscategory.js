module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {
    postId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    categoryId: DataTypes.INTEGER,
  });

  PostsCategory.associate = (models) => {
    PostsCategory.belongsTo(models.Category, {
      foreignKey: 'id', as: 'CategoryId',
    });
  };

  return PostsCategory;
};