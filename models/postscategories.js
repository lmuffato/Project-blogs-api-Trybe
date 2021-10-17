module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {}, {
    tableName: 'PostsCategories', timestamps: false,
  });

  PostsCategories.associate = ({ BlogPosts, Categories }) => {
    Categories.belongsToMany(BlogPosts, {
      as: 'blogposts', through: PostsCategories, foreignKey: 'categoryId', otherKey: 'PostId',
    });
    BlogPosts.belongsToMany(Categories, {
      as: 'categories', through: PostsCategories, foreignKey: 'PostId', otherKey: 'categoryId',
    });
  };  

  return PostsCategories;
};