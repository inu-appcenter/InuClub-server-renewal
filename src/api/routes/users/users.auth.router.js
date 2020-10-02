function usersAuthRouter({ router }) {
  /**
   * @description INU 통합 회원가입
   * @routes POST /auth/signup
   * @request @body {id, passwd, tel, major, name}
   */
  router.post('/signup', (req, res) => {
    const signUpOptions = {
      url: config.signUp,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      form: {
        id: req.body.id,
        passwd: req.body.passwd,
        tel: req.body.tel,
        major: req.body.major,
        name: req.body.name,
      },
      json: true,
    };
    request.post(signUpOptions, (err, response, body) => {
      if (!err) {
        switch (response.statusCode) {
          case 200:
            returnStatus = 200;
            returnJson = {
              ans: response.body.answer,
            };
            break;
          case 400:
            returnStatus = 400;
            returnJson = {
              ans: response.body.answer,
            };
            break;
          default:
            break;
        }
        res.status(returnStatus).json(returnJson);
        return response;
      } else {
        console.log(err);
      }
    });
  });

  /**
   * @description INU 통합 로그인
   * @routes POST /auth/login
   * @request @body {id, passwd}
   */
  router.post('/login', async (req, res) => {
    const signInOptions = {
      url: config.signIn,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      form: {
        id: req.body.id,
        passwd: req.body.passwd,
      },
      json: true,
    };
    request.post(signInOptions, (err, response, body) => {
      if (!err) {
        switch (response.statusCode) {
          case 200:
            returnStatus = 200;
            returnJson = {
              token: response.body.token,
            };
            break;
          case 400:
            returnStatus = 400;
            returnJson = {
              ans: response.body.ans,
            };
            break;
          default:
            break;
        }
        res.status(returnStatus).json(returnJson);
        return response;
      } else {
        console.log(err);
      }
    });
  });
}

module.exports = usersAuthRouter;
