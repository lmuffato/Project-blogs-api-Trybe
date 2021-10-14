module.exports = async (error, _req, res, _next) => {
  const { message, status } = error;
  console.log(error, 'ERROR JS');
  res.status(status).json({ message });
};