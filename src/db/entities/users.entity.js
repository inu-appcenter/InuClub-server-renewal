module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define(
    'User',
    {
      studentId: {
        type: Datatypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      name: {
        type: Datatypes.STRING(20),
        allowNull: false,
      },
    },
    { charset: 'utf8', collate: 'utf8_general_ci' },
  );
  User.associate = (db) => {
    db.User.belongsToMany(db.Club, { through: 'user_club', as: 'myClub' });
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Vote, { through: 'user_voting', as: 'voted' });
  };
  return User;
};
