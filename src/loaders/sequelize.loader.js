const db = require('../db/entities');

async function loadSequelize() {
  try {
    await db.sequelize.sync({ force: false }).then(() => {
      console.log('connected database');
    });
  } catch (e) {
    console.error(e);
    throw new Error('sequelizeLoader error');
  }
}

module.exports = loadSequelize;
