const { validationResult } = require('express-validator');

const fieldsValidation = (req, res, next) => {
  const { errors } = validationResult(req);
  
  if (errors[0]) {
    const { msg } = errors[0];

    return res.status(msg.code).json({ message: msg.message });
  }

  next();
};

module.exports = fieldsValidation;