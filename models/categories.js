module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('Category', {
    // id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return categories;
};