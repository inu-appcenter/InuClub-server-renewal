module.exports = (sequelize, Datatypes) => {
  const Admin = sequelize.define(
    'Admin',
    {
      adminId: {
        type: Datatypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Datatypes.STRING(40),
        allowNull: false,
      },
    },
    { charset: 'utf8', collate: 'utf8_general_ci' },
  );
  Admin.associate = (db) => {
    db.Admin.hasOne(db.Club);
    db.Admin.hasMany(db.Event);
  };
  return Admin;
};
