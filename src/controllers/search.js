const productModel = require("../models/product");
const mongoose = require("mongoose");

module.exports = {
  searchAllProduct: async (req, res) => {
    try {
      console.log(req.query);
      const search = await productModel.aggregate([
        {
          $search: {
            index: "product-search",
            text: {
              query: `${req.query.q}`,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      res.status(200).send({
        data: search,
        message: "Successfull",
        isError: false,
        error: {},
      });
    } catch (error) {}
  },
};
