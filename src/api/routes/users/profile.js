//내정보 수정, 삭제 ,불러오기
const express = require('express');
const router = express.Router();
const request = require('request');
const authMiddleWare = require('../../middlewares/auth.middleware');
const config = require('../../../config/config');
let returnJson = {};
let returnStatus;

router.use('/myPage', authMiddleWare);
router.use('/changeInfo', authMiddleWare);
router.use('/changeBefore', authMiddleWare);

router.post('/changeInfo', (req, res) => {
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

router.post('/myPage', async (req, res) => {
  let decodedQuery = {
    id: req.decoded.id,
    name: req.decoded.name,
    major: req.decoded.major,
  };
  res.status(200).json(decodedQuery);
});

router.post('/changeBefore', async (req, res) => {
  let decodedQuery = {
    id: req.decoded.id,
    name: req.decoded.name,
    major: req.decoded.major,
    tel: req.decoded.tel,
  };
  res.status(200).json(decodedQuery);
});
module.exports = router;
