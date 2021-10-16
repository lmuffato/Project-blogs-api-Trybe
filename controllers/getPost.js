const { getAllPosts } = require('../services');

const getPost = async (_req, res) => {
    const newArr = await getAllPosts();
    return res.status(200).json(newArr);    
};

module.exports = getPost;