const express = require('express');
const errorHandler = require('./utils/error.handler.util');
const routers = require('./api/routes');
const loaders = require('./loaders');

/**
 * @authors 박소현:10th | 임태호:11.5th
 * @host AppCenter 000.000.000.000
 * @description 인천대학교 동아리 애플리케이션 모놀로식 서버입니다.
 *
 * @period 2020-10-01 ~
 * @INU_auth_api https://documenter.getpostman.com/view/70398/S1M3uQSL?version=latest
 * @INU_CLUB_api https://documenter.getpostman.com/view/10199648/TVRg6V1A
 * @github https://github.com/inu-appcenter/InuClub-server-renewal
 */
async function server() {
  // create Application
  const app = express();

  // load application middleware
  await loaders({ app });

  // register routers
  routers({ app });

  // error handler
  errorHandler({ app });

  // port binding
  app.listen(9000, () => {
    console.log('server start!!');
  });
}

server();
