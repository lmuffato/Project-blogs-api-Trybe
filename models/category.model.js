const Category = (sequelize, DataTypes) => {
  const categoryTable = sequelize.define('Category', {
      name: DataTypes.STRING,
    },
    {
      tableName: 'Categories',
      timestamps: false,
    });

  return categoryTable;
};

module.exports = Category;