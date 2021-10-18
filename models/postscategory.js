module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {
    // categoryId: DataTypes.INTEGER,
    // name: DataTypes.STRING,
  }, { timestamps: false, tableName: 'PostsCategories' });

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
      { as: 'categories', through: PostsCategory, foreignKey: 'postId', otherKey: 'categoryId' });
      models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategory;
  // PostsCategory.associate = (models) => {
  //   PostsCategory.belongsTo(models.Category, {
  //     foreignKey: 'id', as: 'Categories',
  //   });
  // };
  // return PostsCategory;
};
