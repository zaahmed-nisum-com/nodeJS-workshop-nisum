module.exports = {
  isAccess: async () => {
    try {
      next()
    } catch (error) {
      throw new Error(error);
    }
  },
};
