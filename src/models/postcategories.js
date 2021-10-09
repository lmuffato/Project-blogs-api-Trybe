module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategory', {}, {
  tableName: 'PostsCategories',
  });
  
  PostsCategories.associate = ({ BlogPost, Category }) => {
  Category.belongsToMany(BlogPost, {
    as: 'blogPost',
    through: PostsCategories,
    foreignKey: 'id',
    otherKey: 'id',
  });
  BlogPost.belongsToMany(Category, {
    as: 'categories',
    through: PostsCategories,
    foreignKey: 'id',
    otherKey: 'id',
  });
  };
  
  return PostsCategories;
  }; 