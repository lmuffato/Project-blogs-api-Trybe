const { Model } = require('sequelize');

/* function postSchema(DataTypes) {
  return {
    type: DataTypes.INTEGER,
    references: {
      model: 'BlogPost',
      key: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
    unique: 'unique-category-per-post',
  };
}
function categorySchema(DataTypes) {
  return {
    type: DataTypes.INTEGER,
    references: {
      model: 'Category',
      key: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
    unique: 'unique-category-per-post',
  };
} */
module.exports = (sequelize, _DataTypes) => {
  class PostsCategory extends Model {
    static associate(models) {
      PostsCategory.belongsTo(models.BlogPost, { foreignKey: 'postId' });
      PostsCategory.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }
  PostsCategory.init({
/*     postId: postSchema(DataTypes),
    categoryId: categorySchema(DataTypes), */
  }, {
    sequelize,
    modelName: 'PostsCategory',
  });
  return PostsCategory;
};
