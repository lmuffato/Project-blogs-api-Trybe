module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {},
  { timestamps: false });
  PostsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'blogPosts',
      through: PostsCategories,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };
  return PostsCategories;
};
