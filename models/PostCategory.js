module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {},
    { timestamps: false });

  PostCategory.associate = (models) => {
    models.Category.hasMany(models.BlogPost, {
      as: 'BlogPosts',
      through: PostCategory, 
      foreignKey: 'category_id',
      otherKey: 'postId',
    });
    models.BlogPost.hasOne(models.Category, {
      as: 'category',
      through: PostCategory,
      foreignKey: 'blogPost_id',
      otherKey: 'categoryId',
    });
  };

  return PostCategory;
};