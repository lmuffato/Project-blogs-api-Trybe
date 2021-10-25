const errorValidateName = {
  status: 400,
    error: {
      message: '"name" is required',
    },
};

const validateName = (name) => {
  if (!name) throw errorValidateName;
};

module.exports = {
  validateName,
};
