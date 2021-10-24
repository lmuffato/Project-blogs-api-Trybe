const jwt = require('jsonwebtoken');

// Chave secreta usada para encriptografar os dados.
const secret = 'meuTokenSecreto';

const jwtConfig = (timeToExpires, algorithCript) => {
  const config = { expiresIn: timeToExpires, algorithm: algorithCript };
  return config;
};

// Middleware que gera o token com base nas informações do usuário
const tokenGenerator = async (req, res, _next) => {
  const { displayName, email, image } = req.userInfo;
  const obj = { displayName, email, image };
  const token = jwt.sign(obj, secret, jwtConfig('7d', 'HS256'));
  return res.status(200).json({ token });
};

// const verifyEmptyToken = (input) => { 
//   if (!input || input === null || input === '') {
//     throw new Error('Token not found');
//   }
// };

// const emptyToken = (token) => {
//   if (!token
//       || token === ''
//       || token === null
//       || token === undefined) { return true; }
//   return false;
//   };

// const verifyToken = (token) => {
//   try {
//     return jwt.verify(token, secret);
//   } catch (err) {
//     return '';
//   }
// };

// Middleware verifica se o token é válido
// const tokenValidation = async (req, res, next) => {
//   const token = req.headers.authorization;
//   try {
//     if (emptyToken(token)) { return res.status(401).json({ message: 'missing auth token' }); }
//     const decoded = verifyToken(token);
//     // const decoded = jwt.verify(token, secret); // O método verify, verifica a validação e decodificar o token JWT. Caso o token esteja expirado, a própria biblioteca irá retornar um erro.   
//     const user = await usersServices.getByProperty('email', decoded.email); // Se o token é válido, buscar o usuário no bando de dados.
//     if (!user || user === null) { throw new Error('jwt malformed'); }
//     const { _id: userId, role } = user;
//     req.userInfo = { userId, role }; // Disponibilizando o user para outros middlewares
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'jwt malformed' });
//   }
// };

module.exports = {
  tokenGenerator,
  // tokenValidation,
};
