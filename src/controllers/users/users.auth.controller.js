const UsersAuthController = {
  userLogin: (req, res, next) => {
    res.send('user login');
  },
  userSignup: (req, res, next) => {
    res.send('user signup');
  },
  userWithdrawal: (req, res, next) => {
    res.send('user withdrawal');
  },
};

module.exports = UsersAuthController;
