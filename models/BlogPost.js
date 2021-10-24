const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    static associate(models) {
      // define association here
      BlogPost.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    }
  }
  BlogPost.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'BlogPost',
    tableName: 'BlogPosts',
    timestamps: false,
  });
  return BlogPost;
};