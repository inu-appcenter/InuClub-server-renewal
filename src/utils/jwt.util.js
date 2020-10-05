const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const jwt = {
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

  sign: () => {},
};

module.exports = jwt;
