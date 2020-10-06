const jwt = require('../../../utils/jwt.util');

const authMiddleware = {
  /**
   * key : ['inu-auth', 'inu-clubs']
   */
  isUserLogin: ({ key }) => (req, res, next) => {
    const token = jwt.getTokenFromHeader({ req });
    if (!token)
      return res.status(401).json({ success: false, message: 'no token' });

    const decoded = jwt.verify({ token, key });
    if (!decoded)
      return res.status(401).json({ success: false, message: 'invalid token' });

    req.user = { studentId: decoded.id, ...decoded };
    next();
  },
};

module.exports = authMiddleware;
