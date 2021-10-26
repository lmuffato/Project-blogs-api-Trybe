const messages = require('./messages');

const categoriesValidate = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    res.status(messages.categories.name.required.status)
      .json({ message: messages.categories.name.required.message });
  }
  next();
};

module.exports = {
  categoriesValidate,
};
