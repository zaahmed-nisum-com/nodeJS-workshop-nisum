
module.exports = {
  isTokenValid: async () => {
    try {
      return true;
    } catch (error) {
      throw new Error(error);
    }
  },
};
