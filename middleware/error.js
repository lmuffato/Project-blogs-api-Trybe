module.exports = async (error, _req, res, _next) => {
  const { message, status } = error;
  console.log(error, 'ERROOOOOOOOOOR');
  res.status(status).json({ message });
};