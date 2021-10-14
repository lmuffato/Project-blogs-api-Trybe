const PostsCategories = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategories', {}, { 
    timestamps: false,
  });

  PostsCategory.associate = ({ BlogPosts, Categories }) => {
    BlogPosts.belongsToMany(Categories, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    Categories.belongsToMany(BlogPosts, {
      as: 'posts',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategory;
};

module.exports = PostsCategories;
