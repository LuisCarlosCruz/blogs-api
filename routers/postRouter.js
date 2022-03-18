const express = require('express');

const router = express.Router();

const validateToken = require('../middlewares/validateToken');
const postController = require('../controllers/postController');
const validateMiddleware = require('../middlewares/validateMiddleware');

router.post('/post',
validateMiddleware.validateTitle,
validateMiddleware.validateContent,
validateMiddleware.validateCategoryId,
validateToken.validaToken,
postController.createPost);

module.exports = router;