const { HTTP_SERVER_ERROR } = require('../status');

const {
  createServices, readAllServices,
} = require('../services/userServices');

const createController = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const data = { displayName, email, password, image };
    const { found, code, message, token } = await createServices(data);

    if (found) return res.status(code).json({ message });

    if (!found) return res.status(code).json({ token });
  } catch (e) {
    console.log(e.message);
    return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
  }
};

const readAllController = async (_req, res) => {
  // const { emailUser } = req.user;
  const { code, allUsers } = await readAllServices();

  return res.status(code).json(allUsers);
};

module.exports = {
  createController,
  readAllController,
};