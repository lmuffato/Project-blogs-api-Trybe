const { HTTP_SERVER_ERROR } = require('../status');

const {
  createServices, 
  readAllServices,
  readByIdServices,
} = require('../services/userServices');

const createController = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const data = { displayName, email, password, image };
    const { found, code, message, token } = await createServices(data);

    if (found) return res.status(code).json({ message });

    if (!found) return res.status(code).json({ token });
  } catch (e) {
    return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
  }
};

const readAllController = async (_req, res) => {
 try {
  const { code, allUsers } = await readAllServices();

  return res.status(code).json(allUsers);
 } catch (e) {
   return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
 }
};

const readByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const { notFound, code, message, found, user } = await readByIdServices(id);

    if (notFound) return res.status(code).json({ message });

    if (found) return res.status(code).json(user);
  } catch (e) {
    return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
  }
};

module.exports = {
  createController,
  readAllController,
  readByIdController,
};