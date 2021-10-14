const Category = require('../Services/categoryService');
const { builtError } = require('../Services/heplers');

const addNew = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await Category.create(name);
    if (result.message) return next(result);

    return res.status(201).json(result);
  } catch (e) {
    console.log(e.message);
    next(builtError(500, e.message));
  }
};

module.exports = {
  addNew,
};
