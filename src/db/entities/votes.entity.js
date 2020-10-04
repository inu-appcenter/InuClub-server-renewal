module.exports = (sequelize, Datatypes) => {
  const Vote = sequelize.define(
    'Vote',
    {
      title: {
        type: Datatypes.STRING(20),
        allowNull: false,
      },
      content: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      category: {
        type: Datatypes.STRING(10),
        allowNull: false,
      },
      openChatUrl: {
        type: Datatypes.STRING(255),
        allowNull: false,
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
        allowNull: false,
      },
    },
    { charset: 'utf8mb4', collate: 'utf8mb4_general_ci' },
  );
  Vote.associate = (db) => {
    db.Vote.hasMany(db.Comment);
    db.Vote.belongsToMany(db.User, { through: 'user_voting', as: 'voter' });
  };
  return Vote;
};
