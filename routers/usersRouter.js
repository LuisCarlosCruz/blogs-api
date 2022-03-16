const express = require('express');

const router = express.Router();

const validateMiddleware = require('../middlewares/validateMiddleware');
const userController = require('../controllers/userController.js');
const loginController = require('../controllers/loginController');

router.post('/user',
validateMiddleware.validatePassWord,
validateMiddleware.validateDisplayName,
validateMiddleware.validateEmail,
userController.createUser);

router.post('/login',
validateMiddleware.validateEmail,
validateMiddleware.validatePassWord,
loginController.login);

module.exports = router;
