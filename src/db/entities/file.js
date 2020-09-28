module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define(
    'File',
    {
      fileName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { charset: 'utf8mb4', collate: 'utf8mb4_general_ci' },
  );
  File.associate = (db) => {
    db.File.belongsTo(Club);
  };
  return File;
};
