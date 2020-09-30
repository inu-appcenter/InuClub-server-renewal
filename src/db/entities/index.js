const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.Administrator = require('./administrator')(sequelize, Sequelize.DataTypes);
db.Club = require('./club')(sequelize, Sequelize.DataTypes);
db.File = require('./file')(sequelize, Sequelize.DataTypes);
db.Event = require('./event')(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
