const AdminAuthService = require('../../services/administrator/admins.auth.service');

const AdminAuthController = {
  adminLogin: async (req, res, next) => {
    
    },
  adminAuthenticate: async (req, res, next) => {
    try{
      const result = await AdminAuthService.authenticate(req.query)
      if(result) res.status(200).json({success:true})
      else res.status(204).json({success:true,message:'invalid email'})
    }catch(e){
      next(e)
    }  
  },
  adminSignup: async (req, res, next) => {
    try {
      const data = await AdminAuthService.signup(req.query);
      res.status(201).json({ success: true, token: data.answer });
    } catch (e) {
      next(e);
    }
  },

  createToken: async (req, res, next) => {
    res.send('create token');
  },
};

module.exports = AdminAuthController;
