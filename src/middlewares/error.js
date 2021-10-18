const error = (err, _req, res, _next) => {
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Expired or invalid token' }); 
  }
  if (err.status) return res.status(err.status).json({ message: err.message });
  console.log(err);
  return res.status(500).json(err);
};

module.exports = error;
