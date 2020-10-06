module.exports = (sequelize, Datatypes) => {
  const Club = sequelize.define(
    'Club',
    {
      name: {
        type: Datatypes.STRING(15),
        allowNull: false,
      },
      category: {
        type: Datatypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      phone: {
        type: Datatypes.STRING(15),
        allowNull: false,
      },
      site: {
        type: Datatypes.STRING(20),
        allowNull: false,
      },
      url: {
        type: Datatypes.STRING(50),
        allowNull: false,
      },
      masterName: {
        type: Datatypes.STRING(5),
        allowNull: false,
      },
    },
    { charset: 'utf8mb4', collate: 'utf8mb4_general_ci' },
  );
  Club.associate = (db) => {
    db.Club.belongsTo(db.Admin);
    db.Club.belongsToMany(db.User, { through: 'user_club', as: 'member' });
    db.Club.hasMany(db.Image);
  };
  return Club;
};
