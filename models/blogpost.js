const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    static associate(models) {
      BlogPost.belongsToMany(models.Category,
        { as: 'PostToCategories', through: models.PostsCategory, foreignKey: 'postId' });
    }
  }
  BlogPost.init({
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'BlogPost',
  });
  return BlogPost;
};