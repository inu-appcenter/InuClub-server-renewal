module.exports = (sequelize, Datatypes) => {
  const Club = sequelize.define(
    'Club',
    {
      clubName: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      AName: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      content: {
        type: Datatypes.TEXT,
        allowNull: true,
      },
      phoneN: {
        type: Datatypes.STRING,
        allowNull: true,
      },
      place: {
        type: Datatypes.STRING,
        allowNull: true,
      },
      registerLink: {
        type: Datatypes.TEXT,
        allowNull: true,
      },
    },
    { charset: 'utf8mb4', collate: 'utf8mb4_general_ci' },
  );
  Club.associate = (db) => {
    //1:1관계
    db.Club.belongsTo(db.Administrator);
    //1:N관계
    db.Club.hasMany(db.Event); //Event에서는 belongsTo로해야함. 동아리를 기준으로 해당 동아리에 여러개의 행사가 있으므로
    //1:N관계
    db.Club.hasMany(db.File); //File에서는 belongsTo로해야함. 동아리를 기준으로 해당 동아리에 여러개의 이미지 파일이 있으므로
  };
  return Club;
};
