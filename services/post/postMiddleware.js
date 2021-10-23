const { BlogPost } = require('../../models');

const getAll = async (req, res) => {
  try {
    const data = await BlogPost.findAll({});
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await BlogPost.findByPk(id);
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const obj = { title, content };
    await BlogPost.update(obj, { where: { id } });
  return res.status(200).json(obj);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const dataToDelete = await BlogPost.findByPk(id);
    await dataToDelete.destroy();
    return res.status(200).json(dataToDelete);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createNew = async (req, res) => {
  try {
    const { title, content } = req.body;
    const obj = { title, content };
    const newData = await BlogPost.create(obj);
    return res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  updateById,
  deleteById,
  createNew,
};
