module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  },
  {
    tableName: 'Categories',
    timestamps: false,
  });
  return Categorie;
};