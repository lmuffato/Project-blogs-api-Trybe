module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory',
    {},
    { timestamps: false });

  PostsCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPosts',
      through: PostsCategory, 
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'category',
      through: PostsCategory,
      foreignKey: 'blogPost_id',
      otherKey: 'categoryId',
      
    }); 
  };
  return PostsCategory;
};