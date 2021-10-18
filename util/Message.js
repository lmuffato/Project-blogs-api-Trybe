const MESSAGE = {
    success: { 
        status: 200,
        message: 'token',
    },
    userAlreadyRegisterd: {
        status: 400,
        message: 'User already registered',
    },  
    displayNameNotValid: {
        status: 400,
        message: '"displayName" length must be at least 8 characters long',
    },    
    emailNotValid: {
        status: 400,
        message: '"email" must be a valid email',
    },
    emailAlreadyExists: {
        status: 409,
        message: 'User already registered',
    },
    emailNotExists: {
        status: 400,
        message: '"email" is required',
    }, 
    passwordNotValid: {
        status: 400,
        message: '"password" length must be 6 characters long',
    }, 
    passwordNotExists: {
        status: 400,
        message: '"password" is required',
    },
};

module.exports = MESSAGE;