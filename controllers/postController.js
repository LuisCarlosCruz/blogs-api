const { StatusCodes } = require('http-status-codes');

const categoriesService = require('../services/categoriesService');
const postService = require('../services/postService');

const createPost = async (req, res, _next) => {
  try {
    const { categoryIds, title, content } = req.body;
    const { id } = req.user.userSemPassword;

    const categoryIsValid = await categoriesService.getCategoryById(categoryIds);

    if (categoryIsValid.status) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: categoryIsValid.message });
    }

    const result = await postService.createPost(id, title, content);

    return res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};

module.exports = { createPost };