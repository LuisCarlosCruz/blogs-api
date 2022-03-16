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

module.exports = { createUser, genToken };
