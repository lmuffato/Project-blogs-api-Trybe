module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategory', {}, {
    tableName: 'PostsCategories', timestamps: false,
  });

  PostsCategories.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    Category.belongsToMany(BlogPost, {
      as: 'posts',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategories;
}; 