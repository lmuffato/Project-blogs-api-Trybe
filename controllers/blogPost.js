const { BlogPost } = require('../models');
const httpStatus = require('../utils/httpStatus');

const errorCodes = require('../utils/errorCodes');

const create = async (req, res) => {

  const { title, content, categoryIds} = req.body;
  
};

module.exports = {
  create,
};
