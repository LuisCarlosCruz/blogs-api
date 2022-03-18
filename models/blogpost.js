const Post = (sequelize, DataTypes) => {
  const post = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    updated: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  }, { tableName: 'BlogPosts', timestamps: false });
  
  post.associate = (models) => { post.belongsTo(models.User, { foreignKey: 'id', as: 'users' }); };

  return post;
};

module.exports = Post;
