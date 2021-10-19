module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category',
  {
     name: DataTypes.STRING,
     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

   return Category;
 };