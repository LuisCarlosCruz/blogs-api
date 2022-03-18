const { BlogPost } = require('../models');

const createPost = async (id, title, content) => {
  const userId = id;
  const result = await BlogPost.create({ userId, title, content });

  const { published: _published, updated: _updated, ...post } = result.dataValues;

  return post;
};

module.exports = { createPost };