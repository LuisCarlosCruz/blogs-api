const jwt = require('jsonwebtoken');
const { User } = require('../models');

require('dotenv').config();

const genToken = async (data) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(data, process.env.SECRET, jwtConfig);

  return token;
};

const createUser = async (body) => {
  const { displayName, email, password, image } = body;

  const existUser = await User.findOne({ where: { email } });

  if (existUser !== null) return { status: 409, message: 'User already registered' };

  await User.create({ displayName, email, password, image });

  const token = genToken({ displayName, email, image });

  return token;
};

const getAllUser = async () => {
  const allUser = await User.findAll();

  return allUser;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (!user) return { status: 404, message: 'USER NAO EXISTE' };

  const { password: _password, ...dataValues } = user.dataValues;

  return dataValues;
};

module.exports = { createUser, genToken, getAllUser, getUserById };
