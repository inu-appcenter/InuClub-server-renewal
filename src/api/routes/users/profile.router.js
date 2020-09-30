function profileRouter(router) {
  // router.use(isLogin);
  /**
   * @description 프로필 수정
   * @routes PATCH /users/profile
   */
  router.patch('/profile', (req, res) => {
    const changeQuery = {
      url: config.changeInfo,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      form: {
        id: req.decoded.id,
        passwd: req.body.passwd,
        newPasswd: req.body.newPasswd,
        tel: req.body.tel,
        major: req.body.major,
        name: req.body.name,
      },
      json: true,
    };
    request.post(changeQuery, (err, response, body) => {
      if (!err) {
        switch (response.statusCode) {
          case 200:
            returnStatus = 200;
            returnJson = {
              ans: 'success',
            };
            break;

          case 400:
            returnStatus = 400;
            returnJson = {
              ans: 'password',
            };
            break;

          default:
            break;
        }
        res.status(returnStatus).json(returnJson);
      } else {
        console.log(err);
      }
    });
  });

  /**
   * @description 프로필 조회
   * @routes GET /user/profile
   */
  router.get('/profile', async (req, res) => {
    let decodedQuery = {
      id: req.decoded.id,
      name: req.decoded.name,
      major: req.decoded.major,
    };
    res.status(200).json(decodedQuery);
  });

  router.post('/tmpPasswd', async (req, res) => {
    const tmpPasswdQuery = {
      url: config.tmpPasswd,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      form: {
        id: req.body.id,
        name: req.body.name,
      },
      method: 'post',
      json: true,
    };
    request.post(tmpPasswdQuery, (error, result) => {
      if (error) return res.json(error.message);
      else {
        return res.json(result.body);
      }
    });
  });
}

module.exports = profileRouter;
