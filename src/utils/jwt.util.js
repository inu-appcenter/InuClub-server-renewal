const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const jwt = {
  getTokenFromHeader: ({ req }) => {
    if (
      (req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Token') ||
      (req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer')
    ) {
      return req.headers.authorization.split(' ')[1];
    }
    return null;
  },

  /**
   * key: ['inu-auth', 'inu-clubs']
   */
  verify: ({ token, key }) => {
    let secretKey;
    switch (key) {
      case 'inu-auth':
        secretKey = process.env.INU_AUTH_KEY || '';
        break;
      case 'inu-clubs':
        secretKey = process.env.INU_CLUBS_KEY || '';
        break;
    }

    return jsonwebtoken.verify(token, secretKey);
  },

  sign: ({ adminId }) => {
    let secretKey = process.env.INU_CLUBS_KEY || '';
    const token = jsonwebtoken.sign(
      {
        adminId: adminId,
      },
      secretKey,
    );

    return token;
  },
};

module.exports = jwt;
