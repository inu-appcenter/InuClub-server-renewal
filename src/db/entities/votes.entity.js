module.exports = (sequelize, Datatypes) => {
  const Vote = sequelize.define(
    'Vote',
    {
      title: {
        type: Datatypes.STRING(100),
        allowNull: false,
      },
      content: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      category: {
        type: Datatypes.INTEGER,
        allowNull: false,
      },
      openChatUrl: {
        type: Datatypes.STRING(255),
        allowNull: true,
      },
      startDate: {
        type: Datatypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: Datatypes.DATE,
        allowNull: false,
      },
      numOfPeople: {
        type: Datatypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
    },
    { charset: 'utf8mb4', collate: 'utf8mb4_general_ci' },
  );
  Vote.associate = (db) => {
    db.Vote.hasMany(db.Comment);
    db.Vote.belongsTo(db.User);
    db.Vote.belongsToMany(db.User, { through: 'user_voting', as: 'voter' });
  };
  return Vote;
};
