const Joi = require('joi');

const displayNameValidate = (displayName, response) => {
    const displayNameValidation = Joi.string().min(8).required();
    const displayNameIsValid = displayNameValidation.validate(displayName);
    const displayNameMessage = '"displayName" length must be at least 8 characters long';

    if (displayNameIsValid.error) return response.status(400).json({ message: displayNameMessage });
};

const emailValidate = (email, response) => {
    const emailValidation = Joi.string().email().required();
    const emailIsValid = emailValidation.validate(email);
    const emailMessageInvalid = '"email" must be a valid email';
    const emailMessageUndefined = '"email" is required';

    if (!email) return response.status(400).json({ message: emailMessageUndefined });
    if (emailIsValid.error) return response.status(400).json({ message: emailMessageInvalid });
};

const passwordValidate = (password, response) => {
    const passwordValidation = Joi.string().min(6).required();
    const passwordIsValid = passwordValidation.validate(password);
    const passwordMessageInvalid = '"password" length must be 6 characters long';
    const passwordMessageUndefined = '"password" is required';

    if (!password) return response.status(400).json({ message: passwordMessageUndefined });
    if (passwordIsValid.error) {
        return response.status(400).json({ message: passwordMessageInvalid });
    }
};

const userValidate = (request, response, next) => {
    const { displayName, email, password } = request.body;

    displayNameValidate(displayName, response);
    emailValidate(email, response);
    passwordValidate(password, response);

    return next();
};

module.exports = userValidate;