const {
  StatusCodes: {
    CREATED,
  },
} = require('http-status-codes');

async function register(req, res) {
  const fields = req.body;
  
  const token = 'devolverToken';
  return res.status(CREATED).json({ token });
}

module.exports = {
  register,
};
