const Category = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, { timestamps: false, tablename: 'Categories' });
  return category;
};

module.exports = Category;
