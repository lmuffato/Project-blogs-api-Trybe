const { User } = require('../../models');
const { createToken } = require('../../utils/token');

class CreateUserService {
  constructor({ displayName, email, password, image }) {
    this.user = {
      displayName,
      email,
      password,
      image,
    };
  }

  async handle() {
    try {
      const user = await User.create(this.user);

      if (!user) return null;

      const token = createToken(user);

      return { token };
    } catch (e) {
      console.error(e);
      return { isServerError: true };
    }
  }
}

module.exports = CreateUserService;
