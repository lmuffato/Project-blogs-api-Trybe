module.exports = (sequelize, DataTypes) => {
const BlogPost = sequelize.define('BlogPost',
  {
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    // userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User,
      { foreignKey: 'userId', as: 'user' });
  };
  return BlogPost;
};

// Source: --> Sobre associações: https://sequelize.org/master/manual/assocs.html
// --> Sobre Models em geral: https://sequelize.org/master/manual/model-basics.html
