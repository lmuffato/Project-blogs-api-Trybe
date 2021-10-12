const login = (req, res) => {
  const { token } = req.user;

  return res.status(200).json({ token });
};

module.exports = { login };
