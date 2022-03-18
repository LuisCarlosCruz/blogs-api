const associate = (PostCategories) => (
  (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
         as: 'categories',
         through: PostCategories,
         foreignKey: 'categoryId',
         otherKey: 'postId',
       });
    models.Categorie.belongsToMany(models.BlogPost, { 
         as: 'posts',
         through: PostCategories,
         foreignKey: 'postId',
         otherKey: 'categoryId',
       });
  }
);

const PostCategorie = (sequelize, _DataTypes) => {
  const PostCategories = sequelize.define('PostsCategories',
  {}, { timestamps: false });

  PostCategories.associate = associate(PostCategories);

  return PostCategories;
};

module.exports = PostCategorie;
