module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        primeryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
    },
    { timestamps: false },
  );

  return Category;
};