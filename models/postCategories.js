module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {},
    { timestamps: false });
  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.Post, {
        as: 'posts',
        through: PostCategory,
        foreignKey: 'category_id',
        otherKey: 'post_id',
      });
    models.Post.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'post_id',
        otherKey: 'category_id',
      });
  };
  return PostCategory;
};