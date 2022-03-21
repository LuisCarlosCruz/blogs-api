const { BlogPost, PostsCategories, User, Categorie } = require('../models');

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
  const allPosts = await BlogPost
    .findAll(
      { include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categorie, as: 'categories', attributes: { exclude: ['PostsCategories'] } },
        ] },
    );

  console.log(allPosts, 'SERVICE');

  return allPosts;
};

module.exports = { createPost, getAllPosts };

// 
