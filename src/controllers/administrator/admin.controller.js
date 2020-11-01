const AdminService = require('../../services/administrator/admins.auth.service');

const AdminController = {
  adminLogin: async (req, res, next) => {
    res.send('admin Login');
    
  },
  adminAuthenticate: async (req, res, next) => {
    try{
      const result = await AdminService.authenticate(req.query)
      console.log(result)
      if(result) res.status(200).json({success:true})
      else res.status(204).json({success:true,message:'invalid email'})
    }catch(e){
      next(e)
    }  
  },
  adminSignup: async (req, res, next) => {
    const data = await AdminService.
    res.send('admin signup');
  },

  createToken: async (req, res, next) => {
    res.send('create token');
  },
};

module.exports = AdminController;
