const jwt = require("jsonwebtoken");

module.exports = {
  generateJwtToken: async (body) => {
    try {
      const jwtToken = jwt.sign(
        { data: { ...body } },
        process.env.JWT_TOKEN_SECRET_KEY,
        { expiresIn: "15h" }
      );
      return jwtToken;
    } catch (error) {}
  },
  get1MohthDifference: async (date, exprieLimitMonth) => {
    return new Date(date.setDate(date.getDate() + exprieLimitMonth));
  },
};
