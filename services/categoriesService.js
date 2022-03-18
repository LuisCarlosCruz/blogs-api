const { Categorie } = require('../models');

const createCategory = async (category) => {
  const data = await Categorie.create({ name: category });

  return data;
};

const getAllCategories = async () => {
  const data = await Categorie.findAll();

  return data;
};

const getCategoryById = async (categoryIds) => {
  const category = await Promise.all(
    categoryIds.map((id) => Categorie.findByPk(id)),
  );

  const invalidCategory = category.find((item) => item === null);

  if (invalidCategory === null) {
    return { status: 404, message: '"categoryIds" not found' };
  }

  return category;
};

module.exports = { createCategory, getAllCategories, getCategoryById };