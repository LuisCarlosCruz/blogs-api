const { StatusCodes } = require('http-status-codes');

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  // if (!displayName) return next({ status: StatusCodes.BAD_REQUEST, message: 'displayName vazio' });
  if (!displayName) { 
    return res.status(StatusCodes.BAD_REQUEST).send({ message: '"displayName" is required' });
  }

  if (typeof displayName !== 'string') {
    return res.status(StatusCodes.BAD_REQUEST).send({ message: 'displayname must be a string' });
  }

  const min = 8;
  if (displayName.length < min) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  const isEmptyEmail = email === '';
  
  if (isEmptyEmail) {
      return res
        .status(StatusCodes.BAD_REQUEST).send({ message: '"email" is not allowed to be empty' });
  }

  if (!email) return res.status(StatusCodes.BAD_REQUEST).send({ message: '"email" is required' });

  const verifyEmail = (data) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(data);
  };

  if (verifyEmail(email) === false) {
    return res.status(StatusCodes.BAD_REQUEST).send({ message: '"email" must be a valid email' });
  }
  
  next();
};

const validatePassWord = (req, res, next) => {
  const { password } = req.body;

  const isEmptyPassword = password === '';
  if (isEmptyPassword) {
    return res
      .status(StatusCodes.BAD_REQUEST).send({ message: '"password" is not allowed to be empty' });
  }

  if (!password) { 
    return res.status(StatusCodes.BAD_REQUEST).send({ message: '"password" is required' });
  }

  const min = 6;
  if (password.length < min || password.length > min) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: '"password" length must be 6 characters long' });
  }

  next();
};

const validateCategory = (req, res, next) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(StatusCodes.BAD_REQUEST).send({ message: '"name" is required' });
  }
  next();
};

const validateTitle = async (req, res, next) => {
  const { title } = req.body;

  if (!title) return res.status(StatusCodes.BAD_REQUEST).send({ message: '"title" is required' });

  next();
};

const validateContent = async (req, res, next) => {
  const { content } = req.body;

  if (!content) {
    return res.status(StatusCodes.BAD_REQUEST).send({ message: '"content" is required' });
  }

  next();
};

const validateCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(StatusCodes.BAD_REQUEST).send({ message: '"categoryIds" is required' });
  }

  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassWord,
  validateCategory,
  validateTitle,
  validateContent,
  validateCategoryId,
};
