const slugify = require("slugify");
let data = require("../data");
let { category } = require("../db/models");
let { product } = require("../db/models");

console.log(category);
exports.categoriesFetch = async (categoriesId) => {
  const myCategory = await category.findByPk(categoriesId);
  return myCategory;
};
exports.categoriesCreate = async (req, res, next) => {
  try {
    if (req.file) req.body.image = `http://localhost:8000/${req.file.path}`;

    const newCategory = await category.create(req.body);
    res.status(201).json(newCategory);
  } catch (e) {
    next(e);
  }
};
exports.categoriesDelete = async (req, res, next) => {
  try {
    await req.mycategory.destroy();
    res.status(204).end();
  } catch (e) {
    next(e);
  }
};
exports.categoriesDetail = async (req, res, next) =>
  res.status(201).json(req.myCategory);
exports.categoriesList = async (req, res, next) => {
  try {
    const categories = await category.findAll({
      include: {
        model: product,
        as: "cookies",
      },
    });
    res.json(categories);
  } catch (e) {
    next(e);
  }
};
exports.categoriesUpdate = async (req, res, next) => {
  try {
    if (req.file) req.body.image = `http://localhost:8000/${req.file.path}`;
    await req.mycategory.update(req.body);
    res.status(200).json(req.myCategory);
  } catch (e) {
    next(e);
  }
};
exports.clothesCreate = async (req, res, next) => {
  try {
    if (req.file) req.body.image = `http://localhost:8000/${req.file.path}`;
    req.body.categoryId = req.myCategory.id;
    const newProduct = await product.create(req.body);
    res.status(201).json(newProduct);
  } catch (e) {
    next(e);
  }
};
