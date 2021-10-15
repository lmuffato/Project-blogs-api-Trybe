const emailRequired = async (req, res, next) => {
    const { email } = req.body;

    if (!email || email === '') {
        return res.status(401).json({ message: 'All fields must be filled' });
    }
    next();
};

const emailValid = async (req, res, next) => {
    const { email } = req.body;

    const pattern = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;
    const comparePattern = email.match(pattern);
    if (!comparePattern) {
        return res.status(401).json({ message: 'Incorrect username or password' });
    }

    next();
};

module.exports = { emailRequired, emailValid };