const emailValidate = (email, response) => {
    const emailMessageEmpty = '"email" is not allowed to be empty';
    const emailMessageUndefined = '"email" is required';

    if (email === '') return response.status(400).json({ message: emailMessageEmpty });
    if (!email) return response.status(400).json({ message: emailMessageUndefined });
};

const passwordValidate = (password, response) => {
    const passwordMessageEmpty = '"password" is not allowed to be empty';
    const passwordMessageUndefined = '"password" is required';

    if (password === '') {
        return response.status(400).json({ message: passwordMessageEmpty });
    }
    if (!password) return response.status(400).json({ message: passwordMessageUndefined });
};

const loginValidator = (request, response, next) => {
    const { email, password } = request.body;

    emailValidate(email, response);
    passwordValidate(password, response);

    return next();
};

module.exports = loginValidator;