const { HTTP_SERVER_ERROR } = require('../status');

const {
  createServices,
  readAllServices,
  readByIdServices,
  updateServices,
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

const readAllController = async (_req, res) => {
  try {
    const { code, posts } = await readAllServices();

    return res.status(code).json(posts);
  } catch (e) {
    return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
  }
};

const readByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const { notFound, code, message, found, post } = await readByIdServices(id);

    if (notFound) return res.status(code).json({ message });

    if (found) return res.status(code).json(post);
  } catch (e) {
    return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
  }
};

const updateController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const data = { id, title, content };
    const { isDifferent, code, message, isUpdated, updatePost } = await updateServices(data);
    
    if (isDifferent) return res.status(code).json({ message });

    if (isUpdated) return res.status(code).json(updatePost);
  } catch (e) {
    return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
  }
};

module.exports = {
  createController,
  readAllController,
  readByIdController,
  updateController,
};