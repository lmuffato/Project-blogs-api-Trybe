module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {},
  { timestamps: false });
  PostsCategory.associate = ({ Category, BlogPost }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
     });

    Category.belongsToMany(BlogPost, {
      as: 'blogposts',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategory;
};

// PostsCategories.associate = ({ BlogPosts, Categories }) => {
//   Categories.belongsToMany(BlogPosts, {
//   as: 'blogposts', through: PostsCategories, foreignKey: 'categoryId', otherKey: 'PostId',
//   });
//   BlogPosts.belongsToMany(Categories, {
//   as: 'categories', through: PostsCategories, foreignKey: 'PostId', otherKey: 'categoryId',
//   });
//   }; 

// PostsCategory.associate = (models) => {
//   models.BlogPost.belongsToMany(models.Category, {
//   as: 'categories',
//   through: PostsCategory,
//   foreignKey: 'postId',
//   otherKey: 'categoryId',
//   });
//   models.Category.belongsToMany(models.BlogPost, {
//   as: 'posts',
//   through: PostsCategory,
//   foreignKey: 'categoryId',
//   otherKey: 'postId',
//   });
//   };
//   return PostsCategory;
//   }; 