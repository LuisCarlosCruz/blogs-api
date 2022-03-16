const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/loginService');
const userService = require('../services/userService');

const login = async (req, res, _next) => {
  try {
    const { email } = req.body;

    const existUser = await loginService.verifyEmail(email);

    if (existUser.status) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: existUser.message });
    }

    const { password: _password, ...userSemPassword } = existUser;

    const token = await userService.genToken({ userSemPassword });

    return res.status(StatusCodes.OK).json({ token });
  } catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Error Interno' });
  }
};

module.exports = { login };
