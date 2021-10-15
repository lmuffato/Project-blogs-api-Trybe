const { createUser } = require('../services/userService');
const { generateToken } = require('../services/tokenSecurity');

class UserController {
    static async create(request, response) {
        const user = request.body;
        try {
            await createUser(user);
            const token = generateToken(user.email, user.password);
            console.log(token);
            return response.status(201).json({ token });
        } catch (error) {
            return response.status(409).json({ message: error.message });
        }
    }
}

module.exports = UserController;