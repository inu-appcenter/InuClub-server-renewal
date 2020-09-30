const jwt = require('jsonwebtoken');
const key = require('../../config/jwt.Admin').key;

const adminMiddleware = {
  adminLoginValid: () => {},
  adminSignupValid: () => {},

  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(403).json({ success: false, message: '로그인 필요' });
    }
  },
  isNotLoggedIn: (req, res, next) => {
    if (!req.isAuthenticated()) {
      next();
    } else {
      res.status(403).json({ success: false, message: '로그인 필요 없음' });
    }
  },

  verifyToken: (req, res, next) => {
    const token = req.body.token;

    if (!token) {
      return res.status(403).json({
        success: false,
        message: 'not logged in',
      });
    }

    let decoded = jwt.verify(token, key);
    if (decoded) {
      return res.status(201).json({ success: true, message: '토큰 검증 성공' });
    } else {
      return res
        .status(403)
        .json({ success: false, message: '토큰 검증 실패' });
    }
  },
};

module.exports = adminMiddleware;
