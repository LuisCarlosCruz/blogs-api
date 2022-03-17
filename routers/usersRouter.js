const express = require('express');

const router = express.Router();

const validateMiddleware = require('../middlewares/validateMiddleware');
const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');
const validateToken = require('../middlewares/validateToken');

router.post('/user',
validateMiddleware.validatePassWord,
validateMiddleware.validateDisplayName,
validateMiddleware.validateEmail,
userController.createUser);

router.get('/user/:id',
validateToken.validaToken,
userController.getUserById);

router.get('/user',
validateToken.validaToken,
userController.getAllUser);

router.post('/login',
validateMiddleware.validateEmail,
validateMiddleware.validatePassWord,
loginController.login);

module.exports = router;
