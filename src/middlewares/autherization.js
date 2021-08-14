module.exports = {
  isAccess: async () => {
    try {
      return true;
    } catch (error) {
      throw new Error(error);
    }
  },
};
