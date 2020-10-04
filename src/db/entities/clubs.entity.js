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
      personnel: {
        type: Datatypes.INTEGER,
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
    db.Club.belongsTo(db.User);
  };
  return Club;
};
