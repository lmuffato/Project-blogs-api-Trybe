const defaultToken = (token) => {
    if (!token || token === ' ') {
        return { message: 'Token not found' };
      }
    if (token.length !== 16) {
        return { message: 'Expired or invalid token' };
    }
    return 'tokenOk';
};

module.exports = { defaultToken };
