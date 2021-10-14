const secret = 'meusegredo';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = {
  jwtConfig,
  secret,
};
