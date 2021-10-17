const category = (Sequelize, DataTypes) => {
  const cat = Sequelize.define('category', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return cat;
};

module.exports = category;