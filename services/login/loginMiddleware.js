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

const check = async (req, res) => {
  try {
    const { email } = req.body;
    const obj = { email };
    const data = await User.findOne({ where: obj });
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getById, check };
