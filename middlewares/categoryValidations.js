const { HTTP_400, nameRequired } = require('../helpers');

const ifNameExists = (req, res, next) => {
  const { name } = req.body;
  
  if (!name) {
    // console.log('🚀 ~ file: categoryValidations.js ~ line 7 ~ ifNameExists ~ name', name);
    return res.status(HTTP_400).json(nameRequired);
  }
  next();
};

module.exports = {
  ifNameExists,
};