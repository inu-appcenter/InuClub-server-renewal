module.exports = (sequelize, Datatypes) => {
  const Event = sequelize.define(
    'Event',
    {
      title: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      content: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      location: {
        type: Datatypes.STRING(100),
        allowNull: false,
      },
      date: {
        type: Datatypes.DATE,
        allowNull: false,
      },
      startTime: {
        type: Datatypes.TIME,
        allowNull: false,
      },
      endTime: {
        type: Datatypes.TIME,
        allowNull: false,
      },
    },
    { charset: 'utf8mb4', collate: 'utf8mb4_general_ci' },
  );
  Event.associate = (db) => {
    db.Event.belongsTo(db.Admin);
    db.Event.belongsTo(db.Club);
  };
  return Event;
};
