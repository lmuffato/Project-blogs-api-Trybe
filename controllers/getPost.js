const { BlogPost, User, PostsCategory, Category } = require('../models');

const getPost = async (req, res) => {
    const posts = await BlogPost
    .findAll({ include: [{ model: User }, { model: PostsCategory,
         include: [{ model: Category, attributes: ['name', 'id'] }] }] });  
    const codedPosts = JSON.stringify(posts, null, 2);    
    const decodedPosts = JSON.parse(codedPosts);
    const newArr = [];
    decodedPosts.forEach((element) => {
        const user = element.User;
        const categories = element.PostsCategories.map((category) => {            
            const obj = { ...category.Category };            
            return obj;
        });
       const obj = { ...element, categories, user };              
      delete obj.PostsCategories;
      delete obj.User;
        newArr.push(obj);
    });
    return res.status(200).json(newArr);    
};

module.exports = getPost;