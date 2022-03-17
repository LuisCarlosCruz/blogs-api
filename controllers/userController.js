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
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};

const getAllUser = async (_req, res, _next) => {
  try {
    const allUser = await userService.getAllUser();

    return res.status(StatusCodes.OK).json(allUser);
  } catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};

const getUserById = async (req, res, _next) => {
  try {
    const { id } = req.params;

    const user = await userService.getUserById(id);

    if (user.status) {
      return res.status(StatusCodes.NOT_FOUND).send({ message: 'User does not exist' });
    }

    return res.status(StatusCodes.OK).json(user);
  } catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};

module.exports = { createUser, getAllUser, getUserById };
