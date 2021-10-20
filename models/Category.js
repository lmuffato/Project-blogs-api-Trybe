module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Estava gerando o id null
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
    // underscored: true,
  });

  return Category;
};