const categories = (sequelize, DataTypes) => {
  const categoriesModel = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  categoriesModel.associate = (models) => {
    categoriesModel.hasMany(models.PostsCategories, {
      foreignKey: 'categoryId', as: 'postscategories',
    });
};

return categoriesModel;
};

module.exports = categories;
