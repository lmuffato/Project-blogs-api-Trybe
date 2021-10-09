module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategory', {}, {
  tableName: 'PostsCategories',
  });
  
  PostsCategories.associate = ({ BlogPost, Category }) => {
  Category.belongsToMany(BlogPost, {
  as: 'BlogPost',
  through: PostsCategories,
  foreignKey: 'id',
  otherKey: 'id',
  });
  BlogPost.belongsToMany(Category, {
  as: 'BlogPost',
  through: PostsCategories,
  foreignKey: 'id',
  otherKey: 'id',
  });
  };
  
  return PostsCategories;
  }; 