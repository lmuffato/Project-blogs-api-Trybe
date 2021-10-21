const service = require('../service/post');

const createPost = async (req, res) => {
  const { status, data, message } = await service.createPost(req.body, req.user);
  
  if (message) return res.status(status).json({ message });
  
  return res.status(status).json(data);
};

module.exports = {
  createPost,
};
