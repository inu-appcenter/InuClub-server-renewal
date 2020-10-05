const axios = require('axios').default;
require('dotenv').config();

const inuAuth = axios.create({
  baseURL: 'http://' + process.env.INU_AUTH_HOST,
  headers: {
    'X-Custom-Header': 'foobar',
  },
});

module.exports = { inuAuth };
