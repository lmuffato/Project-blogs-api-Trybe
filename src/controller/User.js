const service = require('../service/User');

const createUser = async (req, res, next) => {
  try {
    const { status, message, error } = await service.createUser(req.body);
    if (error) return res.status(status).json({ message: error });

    return res.status(status).json({ message });
  } catch (error) {
   return next(error);
  }
};

const getAll = async (_req, res) => {
  const { status, message, data } = await service.getAll();
  if (message) return res.status(status).json(message);
  
  return res.status(status).json(data);
};

const getById = async (req, res) => {
  const { status, message, data } = await service.getById(req.params.id);
  if (message) return res.status(status).json({ message });

  return res.status(status).json(data);
};

module.exports = {
  createUser,
  getAll,
  getById,
};
