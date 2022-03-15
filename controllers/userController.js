const { StatusCodes } = require('http-status-codes');
const userService = require('../services/userService.js');

const createUser = async (req, res, _next) => {
  try {
    const { body } = req;

    const user = await userService.createUser(body);

    if (user.status) {
      return res.status(StatusCodes.CONFLICT).json({ message: user.message });
    }

    return res.status(StatusCodes.CREATED).json({ token: user });
  } catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Error Interno' });
  }
};

module.exports = { createUser };
