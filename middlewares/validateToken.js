const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const validaToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decoded = await jwt.verify(token, process.env.SECRET);

    // const user = await User.findOne({ where: { displayName: decoded.displayName } });

    // if (!user.displayName) {
    //   return res.status(StatusCodes.NOT_FOUND).json({ message: 'User does not exist' });
    // }

    req.user = decoded;
    next();
  } catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validaToken };