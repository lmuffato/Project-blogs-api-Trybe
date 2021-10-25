// detalhes de construção da função de forma mais ágil e legivel
// vista no repositório do João Andrade Jr https://github.com/tryber/sd-010-a-project-blogs-api/pull/78

const jwt = require('jsonwebtoken');

const { User } = require('../models');

const secretCode = process.env.JWT_SECRET;

const {
    // shortName,
    // emailInvalid,
    // emailIsRequired,
    // shortPassword,
    // passwordIsRequired,
    // emailRegistered,
    invalidFields,
    // noEmail,
    // noPassword,
    // noToken,
    // invalidToken,
    userNotExists,
    // noName,
    // noTitle,
    // noContent,
    // noCategoryId,
    // categoryIdNotFound,
} = require('../utils/messages');

// const {
//     ok,
//     created,
//     // noContent,
//     badRequest,
//     // unauthorized,
//     notFound,
//     // conflict,
// } = require('../utils/anwers');

const getAll = async (_req, res) => {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
};

const create = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const userData = await User.create({ displayName, email, password, image });
    res.status(201).json(userData);
};

const getByEmail = async (user) => {
    const email = user.password
      ? await User.findAll({ where: { email: user.email, password: user.password } })
      : await User.findAll({ where: { email: user.email } });
    return email;
};

const getToken = (user) => {
    const token = jwt.sign(user, secretCode);
    return { token };
};
  
const findUser = async (req, res) => {
    const { email, password } = req.body;
    const [user] = await getByEmail({ email, password });
    if (!user) return res.status(400).json(invalidFields);
    const { email: dataEmail, password: dataPassword } = user.dataValues;
    const token = getToken({ dataEmail, dataPassword });
    res.status(200).json(token);
};
  
const getById = async (req, res) => {
    const { id } = req.params;
    const [user] = await User.findAll({ where: { id } });
    if (!user) return res.status(404).json(userNotExists);
    res.status(200).json({
      id: user.id,
      displayName: user.displayName,
      email: user.email,
      password: user.password,
      image: user.image,
    });
};

module.exports = {
    getAll,
    create,
    getByEmail,
    findUser,
    getById,
};
