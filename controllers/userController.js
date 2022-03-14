const { StatusCodes } = require('http-status-codes');
const userService = require('../services/userService.js');

const createUser = async (req, res, _next) => {
  try {
    const { body } = req;
    const user = await userService.createUser(body);

    return res.status(StatusCodes.CREATED).json(user);
  } catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Error Interno' });
  }
};

module.exports = { createUser };
