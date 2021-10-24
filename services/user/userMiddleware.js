const { User } = require('../../models');

const getAll = async (req, res) => {
  try {
    const data = await User.findAll({ attributes: { exclude: ['password'] } });
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Busca por id utilizando a chave primária
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findByPk(id,
      { attributes: { exclude: ['password'] },
    });
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Buscar por id, utilizando where
// const getById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await User.findOne({
//       where: { id },
//       attributes: { exclude: ['password'] },
//     });
//     return res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

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

// const removeKeyInObject = (obj, key) => {
//   const { [key]: _, ...newObj } = obj;
//   return newObj;
// };

const createNew = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const obj = { displayName, email, password, image };
    await User.create(obj);
    req.userInfo = { displayName, email, image };
    // req.userInfo = removeKeyInObject(obj, 'password');
    // const newData = await User.create(obj);
    // return res.status(201).json(newData);
    req.http = { code: 201 };
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  next();
};

module.exports = { getAll, getById, updateById, deleteById, createNew };
