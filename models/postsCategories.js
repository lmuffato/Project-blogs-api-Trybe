module.exports = (sequelize, _DataTypes) => {
  const definedPostCategory = sequelize.define('PostCategory', {},
  { timestamps: false, tableName: 'PostsCategories' });

  definedPostCategory.associate = ({ BlogPost, Category }) => {
  Category.belongsToMany(BlogPost, {
    as: 'blogPost',
    through: definedPostCategory,
    foreignKey: 'categoryId',
    otherKey: 'postId',
  });
  BlogPost.belongsToMany(Category, {
    as: 'categories',
    through: definedPostCategory,
    foreignKey: 'postId',
    otherKey: 'categoryId',
  });
  };

  return definedPostCategory;
  };
