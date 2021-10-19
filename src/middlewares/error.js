const error = (err, _req, res, _next) => {
  console.log('entrou no middleware de erro');
  console.log(err);
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Expired or invalid token' }); 
  }
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json(err);
};

module.exports = error;
