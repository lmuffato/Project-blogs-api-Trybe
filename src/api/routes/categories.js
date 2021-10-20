const express = require('express');
const { createCategory, getAllCategories } = require('../../controllers/Categories');
const auth = require('../../middlewares/auth');
const fieldsValidation = require('../../middlewares/fieldsValidation');
const validate = require('../../schemas/validate');

const categoriesRouter = express.Router();

categoriesRouter
  .route('/')
  .get(auth, getAllCategories)
  .post(validate.createCategory(), fieldsValidation, auth, createCategory);

module.exports = categoriesRouter;
