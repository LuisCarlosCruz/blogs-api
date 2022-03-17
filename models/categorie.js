const Categorie = (sequelize, DataTypes) => {
  const categorie = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });

  // ??.associate = (models) => {
  //   ??.hasMany(models.??, { foreignKey: '??', as: '??'});
  // }

  return categorie;
};

module.exports = Categorie;