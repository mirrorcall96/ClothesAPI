const slugify = require("slugify");
let data = require("../data");
let { product } = require("../db/models");

exports.clothesFetch = async (clothesId) => {
  const myProduct = await product.findByPk(clothesId);
  return myProduct;
};

exports.clothesDelete = async (req, res, next) => {
  try {
    await req.myProduct.destroy();
    res.status(204).end();
  } catch (e) {
    next(e);
  }
};
exports.clothesDetail = async (req, res, next) =>
  res.status(201).json(req.myProduct);
exports.clothesList = async (req, res, next) => {
  try {
    const products = await product.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(products);
  } catch (e) {
    next(e);
  }
};
exports.clothesUpdate = async (req, res, next) => {
  try {
    if (req.file) req.body.image = `http://localhost:8000/${req.file.path}`;
    await req.myProduct.update(req.body);
    res.status(200).json(req.myProduct);
  } catch (e) {
    next(e);
  }
};
