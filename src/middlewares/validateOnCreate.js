const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const validation = validationResult(req);
  
  if (!validation.isEmpty()) {
    const { msg } = validation.array()[0];
    
    return res.status(msg.code).json({ message: msg.message });
  }
  next();
};
