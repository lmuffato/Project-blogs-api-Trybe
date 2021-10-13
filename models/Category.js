const Category = (sequelize, DataTypes) => {
    const category = {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
    };
    return category;
};

module.exports = Category;