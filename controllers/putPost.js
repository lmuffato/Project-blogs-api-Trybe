const { BlogPost, Category, PostsCategory } = require('../models');

const putPost = async (req, res) => {    
    const { id } = req.params;
    const { content, title } = req.body;    
    await BlogPost.update({ content, title }, { where: { id }, returning: true, plain: true });
    const encoded = await BlogPost
    .findByPk(id, { attributes: { exclude: ['published', 'updated', 'id'] }, 
    include: { model: PostsCategory, include: { model: Category } } });
    const post = JSON.parse(JSON.stringify(encoded, null, 2));
    const categories = post.PostsCategories.map((category) => {
        const obj = { ...category.Category };        
        console.log(obj);
        return obj;
    });
    delete post.PostsCategories;
    return res.status(200).json({ ...post, categories });
};

module.exports = putPost;