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
    // underscored: true,
  });

  user.associate = (models) => { 
    user.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'users' }); 
  };

  return user;
};

module.exports = User;
