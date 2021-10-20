const BlogPost = require('../services/blogPostService');

const create = async (req, res) => {
  const { id } = req.user.data;
  console.log(id);

  const { status, data, message } = await BlogPost.create(req.body, id);

  if (message) return res.status(status).json({ message });

  return res.status(status).json(data);
};

module.exports = {
  create,
};
