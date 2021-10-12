module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', 
  {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'postsCategories',
  });
 
  PostsCategory.associate = (models) => {
    PostsCategory.belongsTo(models.BlogPost, { as: 'BlogPosts', foreignKey: 'postId' });
  };

  PostsCategory.associate = (models) => {
    PostsCategory.belongsTo(models.Category, { as: 'Categories', foreignKey: 'categoryId' });
  };

  return PostsCategory;
};