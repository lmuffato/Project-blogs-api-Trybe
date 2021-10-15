module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostCategory', {},
  { timestamp: false, tableName: 'PostsCategories',
 });
  PostsCategories.associate = (models) => {
    models.categories.belongsToMany(models.blogposts, {
      as: 'users',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

    models.blogPosts.belongsToMany(models.categories, {
     as: 'categories',
     through: PostsCategories,
     foreignKey: 'postId',
     otherKey: 'categoryId',
    });
  };

  return PostsCategories;
};