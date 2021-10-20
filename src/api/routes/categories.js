const express = require('express');
const { createCategory } = require('../../controllers/Categories');
const auth = require('../../middlewares/auth');
const fieldsValidation = require('../../middlewares/fieldsValidation');
const validate = require('../../schemas/validate');

const categoriesRouter = express.Router();

categoriesRouter
  .route('/')
  .post(validate.createCategory(), fieldsValidation, auth, createCategory);

module.exports = categoriesRouter;
