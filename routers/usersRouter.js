const express = require('express');

const router = express.Router();

const validateMiddleware = require('../middlewares/validateMiddleware');
const userController = require('../controllers/userController.js');

router.post('/user',
validateMiddleware.validatePassWord,
validateMiddleware.validateDisplayName,
validateMiddleware.validateEmail,
userController.createUser);

module.exports = router;
