const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const create = await userService.createUser(req.body);
    if (create.message) return res.status(create.code).json({ message: create.message });
    res.status(201).json(create);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const getUser = async (req, res) => {
  try {
    const getAll = await userService.getUser();
    return res.status(200).json(getAll);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const getId = await userService.getById(id);
    if (getId.message) return res.status(getId.code).json({ message: getId.message });
    return res.status(200).json(getId);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { createUser, getUser, getById };
