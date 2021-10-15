module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  Posts.associate = ({ User }) => {
    Posts.belongsTo(User, { foreignKey: 'userId', as: 'user' });
  };

  return Posts;
};
