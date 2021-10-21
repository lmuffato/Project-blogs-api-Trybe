const regexEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/; // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript - resposta 1080
  return emailRegex.test(email); // retorna true or false
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  if (email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  } 
  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  
  const regexValidation = regexEmail(email);
  if (!regexValidation) return res.status(400).json({ message: '"email" must be a valid email' });
  next();
};

module.exports = emailValidation;
