module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Post', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    }, {
        tableName: 'BlogPosts',
        timestamps: false,
    });

    Posts.associate = ({ User }) => {
        Posts.belongsTo(User, { foreignKey: 'userId', as: 'user' });
    };

    return Posts;
};