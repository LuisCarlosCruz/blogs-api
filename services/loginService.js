const { User } = require('../models');

const verifyEmail = async (email) => {
  const emailUser = await User.findOne({ where: { email } });

  if (!emailUser) return { status: 400, message: 'Invalid fields' };

  return emailUser.dataValues;
};

module.exports = { verifyEmail };