const express = require('express');

const router = express.Router();

const categoriesController = require('../controllers/categoriesController');
const validateMiddleware = require('../middlewares/validateMiddleware');
const validateToken = require('../middlewares/validateToken');

router.post('/categories',
validateToken.validaToken,
validateMiddleware.validateCategory,
categoriesController.createCategory);

router.get('/categories',
validateToken.validaToken,
categoriesController.getAllCategories);

module.exports = router;