const validateName = (name) => {
  if (!name) {
    return ({ status: 400, message: '"name" is required' });
  }

  return false;
};

const checkCategoryInfo = async (req, res, next) => {
  const { name } = req.body;

  const validatedName = validateName(name);

  if (validatedName.status) {
    return res.status(validatedName.status).json({ message: validatedName.message }); 
  }

  next();
};

module.exports = { checkCategoryInfo };
