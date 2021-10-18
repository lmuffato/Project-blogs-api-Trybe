const Blogpost = (sequelize, DataTypes) => {
  const BlogpostModel = sequelize.define('Blogpost', {
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  BlogpostModel.associate = ({ User }) => {
    BlogpostModel.belongsTo(User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogpostModel;
};

module.exports = Blogpost;