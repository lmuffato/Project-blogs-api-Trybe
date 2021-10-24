module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  return Categorie;
};