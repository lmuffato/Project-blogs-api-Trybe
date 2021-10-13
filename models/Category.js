const Category = (sequelize, DataTypes) => {
  const category = sequelize.define({
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'categories',
  });

  return category;
};

module.exports = Category;
