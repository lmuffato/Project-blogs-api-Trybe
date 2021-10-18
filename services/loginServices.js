const userServices = require('./userServices');
const { token } = require('../middlewares/token');

const userLogin = async (dataLogin) => {
  const { email } = dataLogin;
  const validMail = await userServices.searchMail(email);
  if (validMail === null) return null;
  
  return token(dataLogin);
};

module.exports = { userLogin };