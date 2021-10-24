const { Category } = require('../../models');

const getAll = async (req, res) => {
  try {
    const data = await Category.findAll({});
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Category.findByPk(id);
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const obj = { name };
    await Category.update(obj, { where: { id } });
  return res.status(200).json(obj);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const dataToDelete = await Category.findByPk(id);
    await dataToDelete.destroy();
    return res.status(200).json(dataToDelete);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createNew = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    // const obj = { name: 'inovacao2' };
    const obj = { name };
    const newData = await Category.create(obj);
    return res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getById, updateById, deleteById, createNew };
