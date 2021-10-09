/**
* @param {import('sequelize').Sequelize} sequelize 
* @param {import('sequelize').DataTypes} DataTypes 
* @return 
*/ 

module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategory', {}, {
    tableName: 'PostsCategories', timestamps: false, underscored: true,
  });

  PostsCategories.associate = ({ BlogPost, Category }) => {
    Category.belongsToMany(BlogPost, {
      as: 'posts',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  
  return PostsCategories;
};