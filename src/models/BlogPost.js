const {
  Model,
} = require('sequelize');

// eslint-disable-next-line max-lines-per-function
module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    static associate(models) {
      this.belongsTo(models.User, 
        { foreignKey: 'userId', association: 'users' });
    }
  }
  BlogPost.init({
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'BlogPost',
    tableName: 'BlogPosts',
    underscored: true,
    timestamps: false,
  });
  return BlogPost;
};