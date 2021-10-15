const { HTTP_SERVER_ERROR } = require('../status');

const {
  createServices,
} = require('../services/postServices');

const createController = async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;
    const { id } = req.post;
    const data = { id, title, categoryIds, content };
    const { notFound, code, message, found, blogPost } = await createServices(data);
   
    if (notFound) return res.status(code).json({ message });

    if (found) return res.status(code).json(blogPost);
  } catch (e) {
    return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
  }
};

module.exports = {
  createController,
};