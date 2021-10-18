const badRequest = 400;

const validEmailLogin = (req, res, next) => {
    const { email } = req.body; 
    const re = /\S+@\S+\.\S+/;
    const regex = re.test(email);
    if (email === '') {
      return res.status(badRequest).json({ message: '"email" is not allowed to be empty' });
    }
    if (!email) {
      return res.status(badRequest).json({ message: '"email" is required' });
    }
    if (regex === false) {
      return res.status(badRequest).json({ message: '"email" must be a valid email' });
    }
      next();
  };
  
  const validPasswordLogin = (req, res, next) => {
    const { password } = req.body;
    if (password === '') {
      return res.status(badRequest).json({ message: '"password" is not allowed to be empty' });
    }
    if (!password) {
      return res.status(badRequest).json({ message: '"password" is required' });
    }
    if (password.length < 6) {
        return res.status(badRequest)
        .json(        
              { message: '"password" length must be 6 characters long' },
            );
      }
      next();
  };
  
  module.exports = { 
    validEmailLogin, 
    validPasswordLogin,
   };