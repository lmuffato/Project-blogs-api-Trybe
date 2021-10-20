const BAD_REQUEST = 400;

async function validatePost(req, res, next) {
  const { title, categoryIds, content } = req.body;

  let missingField = null;

  if (!title) {
    missingField = 'title';
  }

  if (!categoryIds) {
    missingField = 'categoryIds';
  }

  if (!content) {
    missingField = 'content';
  }

  if (missingField) {
    return res.status(BAD_REQUEST).json({ message: `"${missingField}" is required` });
  }

  next();
}

module.exports = {
  validatePost,
};