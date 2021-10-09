const getContentBody = (body, validations) => {
  const val = validations.reduce((prev, cur) => {
    const objValidations = { ...prev };

    objValidations[cur] = body[cur];

    return objValidations;
  }, {});

  return val;
};

module.exports = { getContentBody };
