const { sequelize } = require('.');

module.exports = (sequelize, Datatypes) => {
  const Administrator = sequelize.define(
    'Administrator',
    {
      AId: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      AName: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      clubName: {
        type: Datatypes.STRING,
        allowNull: false,
      },
    },
    { charset: 'utf8mb4', collate: 'utf8mb4_general_ci' },
  );
  Administrator.associate = (db) => {
    //1:1관계
    db.Administrator.hasOne(db.Club); //Club에서는 belongsTo로해야함 Administrator는 각 동아리에 한명의 관리자가 Club을 관리하므로
  };
  return Administrator;
};
