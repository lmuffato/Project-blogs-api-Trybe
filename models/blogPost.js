const BlogPost = (sequelize, DataTypes) => {
  const blogpost = sequelize.define('BlogPost', {
    // id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER }, 

    // DUVIDA - POR QUE USAR LINHA 9 nao 10?
    // published: { type: DataTypes.DATE },
    // createdAt: {
    //     type: DataTypes.DATE,
    //     as: 'published',
    //   //   autoIncrement: true,
    // },
    // // updated: { type: DataTypes.DATE },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   as: 'updated',
    // //   autoIncrement: true,
    // },
  }, { timestamps: false });
  return blogpost;
};

module.exports = BlogPost;