const { User } = require('../../models');

const getAll = async (req, res) => {
  try {
    const data = await User.findAll({});
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findByPk(id);
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { displayName, email, password, image } = req.body;
    const obj = { displayName, email, password, image };
    await User.update(obj, { where: { id } });
  return res.status(200).json(obj);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const dataToDelete = await User.findByPk(id);
    await dataToDelete.destroy();
    return res.status(200).json(dataToDelete);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createNew = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const obj = { displayName, email, password, image };
    const newData = await User.create(obj);
    return res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getById, updateById, deleteById, createNew };
