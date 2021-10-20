const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BlogsPosts extends Model { 
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models */) { 
      // define association here
    }
  }
  BlogsPosts.init({
    fullName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'BlogsPosts',
  });
  return BlogsPosts;
}; 