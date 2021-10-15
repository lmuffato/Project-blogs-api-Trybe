const { PostsCategory } = require('../models');

const postCategory = async (arr, id) => {
    const promiseArr = arr
    .map(async (category) => PostsCategory.create({ postId: id, categoryId: category }));
    return Promise.all(promiseArr);
};

module.exports = postCategory;