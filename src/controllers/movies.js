


module.exports = {
  getMovies: async (req, res, next) => {
    try {
      res.status(200).send("movies")
    } catch (error) {}
  },
};
