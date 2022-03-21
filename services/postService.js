const { BlogPost, PostsCategories } = require('../models');

const createPost = async (id, title, content, categoryIds) => {
  const userId = id;
  const result = await BlogPost.create({ userId, title, content });
  
  const { published: _published, updated: _updated, ...post } = result.dataValues;
  
  const { id: postId } = result.dataValues;

  await Promise
    .all(categoryIds.map((category) => PostsCategories.create({ categoryId: category, postId })));
  return post;
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll();

  return allPosts;
};

module.exports = { createPost, getAllPosts };

// 
