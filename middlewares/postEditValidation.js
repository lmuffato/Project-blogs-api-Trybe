const BAD_REQUEST = 400;

async function validateEditPost(req, res, next) {
  const { title, categoryIds, content } = req.body;

  let missingField = null;

  if (!title) {
    missingField = 'title';
  }

  if (!content) {
    missingField = 'content';
  }
  
  if (missingField) {
    return res.status(BAD_REQUEST).json({ message: `"${missingField}" is required` });
  }

  if (categoryIds) {
    return res.status(BAD_REQUEST).json({ message: 'Categories cannot be edited' });
  }

  next();
}

module.exports = {
  validateEditPost,
};