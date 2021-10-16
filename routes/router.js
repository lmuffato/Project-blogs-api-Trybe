const { Router } = require('express');

const { createUser, findAll, findById } = require('../controllers/userController');
const { login } = require('../controllers/loginController');
const { createCategory, findAllCategories } = require('../controllers/createCategoryController');
const { createPost } = require('../controllers/postController');

const validateUser = require('../validations/userValidations');
const validateLogin = require('../validations/loginValidations');
const validateUserId = require('../validations/userValidationId');
const validateCategory = require('../validations/categoriesValidations');
const validatePost = require('../validations/postValidation');
const validateJWT = require('../auth/validateJWT');

const routes = Router();

routes.post('/user', validateUser, createUser); // requisito 1
routes.post('/login', validateLogin, login); // requisito 2
routes.get('/user', validateJWT, findAll); // requisito 3
routes.get('/user/:id', validateUserId, validateJWT, findById); // requisito 4
routes.post('/categories', validateCategory, validateJWT, createCategory); // requisito 5
routes.get('/categories', validateJWT, findAllCategories); // requisito 6
routes.post('/post', validatePost, validateJWT, createPost); // requisito 7
// routes.get('/post', createUser); // requisito 8
// routes.get('/post/:id', createUser); // requisito 9
// routes.put('/post/:id', createUser); // requisito 10
// // Bônus
// routes.delete('/post/:id', createUser); // requisito 11
// routes.delete('/user/me', createUser); // requisito 12
// routes.get('/post/search?q=:searchTerm', createUser); // requisito 13

module.exports = routes;
