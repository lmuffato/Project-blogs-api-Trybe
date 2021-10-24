/* REMOVER CHAVE ESPECÍFICA DO OBJETO
* Especificando a chave a ser removida;
* Independente da posição;
* Sem especificar os demais itens;
*/

// const objToRemoveKey = { name: 'lucas', password: '12345', email: 'l@gmail.com' };

// const removeOneKeyInObject = (obj, keyToBeRemoved) => {
//   const { [keyToBeRemoved]: _, ...newObj } = obj;
//   return newObj;
// };
// console.log(removeOneKeyInObject(objToRemoveKey, 'password'));

// const raw = {
//   item1: { key: 'sdfd', value: 'sdfd' },
//   item2: { key: 'sdfd', value: 'sdfd' },
//   item3: { key: 'sdfd', value: 'sdfd' },
// };

// const filteredKeys = ['item1', 'item3'];

// const filtered = filteredKeys
//   .reduce((obj, key) => ({ ...obj, [key]: raw[key] }), {});

// console.log(filtered);

/* JWTOKEN */

/*
const jwt = require('jsonwebtoken');

// Chave secreta usada para encriptografar os dados.
const secret = 'meuTokenSecreto';

const jwtConfig = (timeToExpires, algorithCript) => {
  const config = { expiresIn: timeToExpires, algorithm: algorithCript };
  return config;
};

const objToken = {
  name: 'lucas',
  displayName: 'lucasMuffato',
  email: 'l@gmail.com',
};

const token = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibHVjYXMiLCJkaXNwbGF5TmFtZSI6Imx1Y2FzTXVmZmF0byIsImVtYWlsIjoibEBnbWFpbC5jb20iLCJpYXQiOjE2MzUwODI1NDMsImV4cCI6MTYzNTY4NzM0M30.MY_aF5XjVIW6LRbERln_Lgy3ds4rD--fyQbGJqmHjM4' };

// const token = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibHVjYXMiLCJkaXNwbGF5TmFtZSI6Imx1Y2FzTXVmZmF0byIsImVtYWlsIjoibEBnbWFpbC5jb20iLCJpYXQiOjE2MzUwODI1NDMsImV4cCI6MTYzNTY4NzM0M30.MY_aF5XjVIW6LRbERln_Lgy3ds4rD--fyQbGJqmHjM' };

// Middleware que gera o token com base nas informações do usuário
const tokenGenerator = (obj) => {
  const tokenv = jwt.sign(obj, secret, jwtConfig('7d', 'HS256'));
  return ({ tokenv });
};

console.log(tokenGenerator(objToken));
console.log(jwt.verify(token.token, secret));

const verifyToken = (tokenv) => {
  try {
    const decoded = jwt.verify(tokenv, secret);
    return decoded;
  } catch (err) {
    throw new Error('Expired or invalid token');
  }
};

const ve = (tokenV) => {
  try {
    const v = verifyToken(tokenV);
    return v;
  } catch (err) {
      return ({ message: err.message });
    }
};

console.log(ve(token.token));
*/

// const objTest = { name: 'lucas', password: '12345', email: 'l@gmail.com' };

// const verifyMissingFileds = (input, field) => {
//   try {
//     if (!input) { throw new Error(`"${field}" is not allowed to be empty`); }
//     return input;
//   } catch (err) {
//     return ({ message: err.message });
//   }
// };

// const { name, password } = objTest;

// console.log(verifyMissingFileds(name, 'name'));
// console.log(verifyMissingFileds(password, 'password'));
// console.log(verifyMissingFileds(image, 'image'));

// console.log(verifyMissingFileds(objTest, 'name'));
// console.log(verifyMissingFileds(objTest, 'password'));
// console.log(verifyMissingFileds(objTest, 'image'));
