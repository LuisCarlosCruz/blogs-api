const { StatusCodes } = require('http-status-codes');
const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res, _next) => {
  try {
    const { name: category } = req.body;

    const result = await categoriesService.createCategory(category);

    return res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};

module.exports = { createCategory };