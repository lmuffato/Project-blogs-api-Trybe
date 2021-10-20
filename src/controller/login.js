const service = require('../service/login');

const logInUser = async (req, res, _next) => {
    const { status, error, data } = await service.logInUser(req.body);
    if (error) return res.status(status).json({ message: error });

    return res.status(status).json(data);
};

module.exports = {
  logInUser,
};
