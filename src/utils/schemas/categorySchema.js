const {
  verifyName,
} = require('../validations/categoryVerify');

const errors = {
  MISSING_NAME: '"name" is required',
};
const status = {
  BAD_REQUEST: 400,
};

const categoryValidations = (name) => {
  switch (true) {
    case verifyName(name): return {
      status: status.BAD_REQUEST, message: errors.MISSING_NAME,
    };
    default: return {};
  }
};

module.exports = {
  categoryValidations,
};