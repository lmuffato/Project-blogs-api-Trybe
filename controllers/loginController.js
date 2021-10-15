const { createToken } = require('../middlewares/createJWT');
const httpStatus = require('../utils/httpStatus');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = { email, password };

  const token = createToken(user);

  res.status(httpStatus.ok).json(token);  
};

module.exports = {
  loginUser,
};
