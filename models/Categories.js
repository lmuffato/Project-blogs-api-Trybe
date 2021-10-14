const categories = (sequelize, DataTypes) => {
  const categoriesModel = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });
  return categoriesModel;
};

module.exports = categories;