const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  user.associate = (models) => { 
    user.hasMany(models.BlogPosts, { foreignKey: 'id', as: 'posts' }); 
  };

  return user;
};

module.exports = User;
