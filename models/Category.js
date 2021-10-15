module.exports = (sequelize, DataTypes) => {
    const categories = sequelize.define('Category', {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name: DataTypes.STRING,
        },
        {
            tableName: 'Categories',
            timestamps: false,
        });

    return categories;
};