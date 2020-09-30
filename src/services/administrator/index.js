const AdminService = {
  login: async (email, password) => {
    try {
      return 1;
    } catch (error) {
      throw new Error(error);
    }
  },
  signup: (email, name, password, clubId) => {
    try {
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = AdminService;
