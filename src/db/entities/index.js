const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.Admin = require('./admin.entity')(sequelize, Sequelize.DataTypes);
db.Club = require('./clubs.entity')(sequelize, Sequelize.DataTypes);
db.Comment = require('./comments.entity')(sequelize, Sequelize.DataTypes);
db.Event = require('./events.entity')(sequelize, Sequelize.DataTypes);
db.User = require('./users.entity')(sequelize, Sequelize.DataTypes);
db.Vote = require('./votes.entity')(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
