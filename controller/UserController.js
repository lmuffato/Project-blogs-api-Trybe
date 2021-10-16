const { createUser, signIn } = require('../services/userService');
const { generateToken } = require('../services/tokenSecurity');

class UserController {
    static async create(request, response) {
        const user = request.body;
        try {
            await createUser(user);
            const token = generateToken(user.email, user.password);
            return response.status(201).json({ token });
        } catch (error) {
            return response.status(409).json({ message: error.message });
        }
    }

    static async login(request, response) {
        const loginData = request.body;
        try {
            const token = await signIn(loginData);
            return response.status(200).json({ token });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}

module.exports = UserController;