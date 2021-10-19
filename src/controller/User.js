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

module.exports = {
  createUser,
};
