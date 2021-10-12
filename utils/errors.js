const error1 = {
  error: {
    status: 400,
    message: '"displayName" length must be at least 8 characters long',
  },
};

const error2 = {
  error: {
    status: 400,
    message: '"email" must be a valid email',
  },
};

const error3 = {
  error: {
    status: 400,
    message: '"email" is required',
  },
};

const error4 = {
  error: {
    status: 400,
    message: '"password" length must be 6 characters long',
  },
};

const error5 = {
  error: {
    status: 400,
    message: '"password" is required',
  },
};

const error6 = {
  error: {
    status: 409,
    message: 'user already registered',
  },
};

const error7 = {
  error: {
    status: 400,
    message: '"email" is not allowed to be empty', 
  },
};

const error8 = {
  error: {
    status: 400,
    message: '"password" is not allowed to be empty', 
  },
};

const error9 = {
  error: {
    status: 400,
    message: 'Invalid fields', 
  },
};

const error10 = {
  error: {
    status: 401,
    message: 'Token not found', 
  },
};

const error11 = {
  error: {
    status: 401,
    message: 'Expired or invalid token', 
  },
};

const error12 = {
  error: {
    status: 404,
    message: 'User does not exist', 
  },
};

const error13 = {
  error: {
    status: 400,
    message: '"name" is required',
  },
};

const error14 = {
  error: {
    status: 400,
    message: '"title" is required',
  },
};

const error15 = {
  error: {
    status: 400,
    message: '"content" is required',
  },
};

const error16 = {
  error: {
    status: 400,
    message: '"categoryIds" is required',
  },
};

const error17 = {
  error: {
    status: 400,
    message: '"categoryIds" not found',
  },
};

const error18 = {
  error: {
    status: 404,
    message: 'Post does not exist',
  },
};

const error19 = {
  error: {
    status: 400,
    message: 'Categories cannot be edited',
  },
};

const error20 = {
  error: {
    status: 401,
    message: 'Unauthorized user',
  },
};

module.exports = {
  error1,
  error2,
  error3,
  error4,
  error5,
  error6,
  error7,
  error8,
  error9,
  error10,
  error11,
  error12,
  error13,
  error14,
  error15,
  error16,
  error17,
  error18,
  error19,
  error20,
};