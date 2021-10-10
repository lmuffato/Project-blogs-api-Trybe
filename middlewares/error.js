module.exports = (error, _req, res, _next) => {
  console.log(error);
  res.status(error.status).json(error.message);
}; 