const { createCategoryS } = require('../services/categoryService');
const { STATUS_CREATE } = require('../utils/httpStatus');

const createCategoryC = async (req, res) => {
  const { name } = req.body;
  try {
    const { id, name: nome } = await createCategoryS(name);
    return res.status(STATUS_CREATE)
      .json({ id: parseInt(id, 10), name: nome });
  } catch (_e) {
    // console.log('Erro interno!');
    return res.status(404).json({ message: 'Erro interno' });
  }
};

module.exports = {
  createCategoryC,
};