const category = (Sequelize, DataTypes) => {
  const cat = Sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return cat;
};

module.exports = category;