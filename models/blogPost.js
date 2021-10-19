const BlogPost = async (sequelize, DataTypes) => {
  const blogpost = await sequelize.define('BlogPost', {
    // id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    // userId: { type: DataTypes.integer, foreignKey: true }, NAO INFORMAR

    // DUVIDA - POR QUE USAR LINHA 9 nao 10?
    published: { type: DataTypes.DATE },
    // createdAt: {
      //   type: DataTypes.DATE,
      //   as / fields : 'published',
      //   autoIncrement: true,
    // },
    updated: { type: DataTypes.DATE },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   as: 'updated',
    //   autoIncrement: true,
    // },
  });
  return blogpost;
};

module.exports = BlogPost;