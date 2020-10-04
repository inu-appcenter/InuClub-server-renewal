const db = require('./src/db/entities');

//todo : server start
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연동 성공');
  })
  .catch((err) => {
    console.error(err);
    console.log('데이터베이스 연동 실패');
  });
