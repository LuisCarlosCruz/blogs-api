const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  },
  {
    underscored: true,
    timestamps: false,
  });

  // ??.associate = (models) => {
  //   ??.hasMany(models.??, { foreignKey: '??', as: '??'});
  // }

  return user;
};

module.exports = User;
