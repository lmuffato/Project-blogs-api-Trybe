const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    name: DataTypes.STRING,
  }, {
    tableName: 'Categories',
    timestamps: false,
  });

  return Category;
};

module.exports = Category;
