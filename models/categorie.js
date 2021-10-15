module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  { timestamps: false });
  
  Category.associate = (models) => {
    Category.belongsToMany(models.BlogPost,
      { as: 'CategoryToPosts', through: models.PostsCategory, foreignKey: 'categoryId' });
  };

  return Category;
};
