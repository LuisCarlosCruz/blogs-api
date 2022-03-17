const { Categorie } = require('../models');

const createCategory = async (category) => {
  const data = await Categorie.create({ name: category });

  return data;
};

module.exports = { createCategory };