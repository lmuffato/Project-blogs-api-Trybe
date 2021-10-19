const erroMessage = (error, req, res, _next) => {
  if (error.isJoi) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  const status = error.code || 500;
  res.status(status).json({ message: erroMessage.error.message });
};

module.exports = erroMessage;