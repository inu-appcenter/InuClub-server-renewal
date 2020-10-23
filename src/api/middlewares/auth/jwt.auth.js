const { User } = require('../../../db/entities');
const jwt = require('../../../utils/jwt.util');

const authMiddleware = {
  /**
   * key : ['inu-auth', 'inu-clubs']
   * req.user : {id, studentId, name, ...}
   */
  isUserLogin: ({ key }) => async (req, res, next) => {
    const token = jwt.getTokenFromHeader({ req });
    if (!token)
      return res.status(401).json({ success: false, message: 'no bearer' });

    const decoded = jwt.verify({ token, key });
    if (!decoded)
      return res.status(401).json({ success: false, message: 'invalid token' });

    if (key === 'inu-auth') {
      try {
        const user = await User.findOne({where: {studentId: decoded.id}})
        req.user = { ...decoded, ...user.toJSON() };
      } catch (e) {
        next(e)
      }
    }
    // 관리자 정보
    if (key === 'inu-clubs') {
      req.admin = {  };
    }
    next();
  },
};

module.exports = authMiddleware;
