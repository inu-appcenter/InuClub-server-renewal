module.exports = (sequelize, Datatypes) => {
  const Event = sequelize.define(
    'Event',
    {
      title: {
        type: Datatypes.STRING,
        allowNull: true,
      },
      content: {
        type: Datatypes.TEXT,
        allowNull: true,
      },
      place: {
        type: Datatypes.TEXT,
        allowNull: true,
      },
      EDate: {
        type: Datatypes.STRING,
        allowNull: true,
      },
      ETime: {
        type: Datatypes.STRING,
        allowNull: true,
      },
    },
    { charset: 'utf8mb4', collate: 'utf8mb4_general_ci' },
  );
  Event.associate = (db) => {
    //1:N관계
    db.Event.belongsTo(db.Club); //Administrator이 없어지면 event도 없어짐(Administrator에 속함)
  };
  return Event;
};
