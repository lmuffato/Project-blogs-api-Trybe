const badRequest = 400;

const validEmail = (req, res, next) => {
    const { email } = req.body; 
    const re = /\S+@\S+\.\S+/;
    const regex = re.test(email);
    if (!email || email === '') {
      return res.status(badRequest).json({ message: '"email" is required' });
    }
    if (regex === false) {
      return res.status(badRequest).json({ message: '"email" must be a valid email' });
    }
      next();
  };
  
  const validPassword = (req, res, next) => {
    const { password } = req.body;
    if (!password || password === '') {
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
  const validateDisplayName = (req, res, next) => {
    const { displayName } = req.body;
    if (!displayName || displayName.length < 8) {
      return res.status(badRequest)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    }
  
    next(); 
  };
  module.exports = { 
    validEmail, 
    validPassword, 
    validateDisplayName,
   };