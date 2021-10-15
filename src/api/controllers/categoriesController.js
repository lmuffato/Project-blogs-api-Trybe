const { HTTP_SERVER_ERROR } = require('../status');

const {
  createServices,
} = require('../services/categoriesServices');

const createController = async (req, res) => {
  try {
    const { name } = req.body;
    const { created, code, category } = await createServices(name);
    console.log(category);

    if (created) return res.status(code).json(category);
  } catch (e) {
    return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
  }
};

module.exports = {
  createController,
};