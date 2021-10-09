module.exports = async (error, _req, res, _next) => {
  const { statusCode, message } = error;  
  res.status(statusCode).json({ message });
};
