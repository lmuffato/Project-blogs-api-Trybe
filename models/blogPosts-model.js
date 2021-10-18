module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
  });

  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};