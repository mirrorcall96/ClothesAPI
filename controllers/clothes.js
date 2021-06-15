const slugify = require("slugify");
let data = require("../data");

exports.clothesCreate = (req, res) => {
  const newClothes = req.body;
  newClothes.id = data[data.length - 1].id + 1;
  newClothes.slug = slugify(newClothes.name);
  data.push(newClothes);
  res.status(201).json(newClothes);
};
exports.clothesDelete = (req, res) => {
  const myBook = data.find((book) => book.id === +req.params.clothesId);
  if (myBook) {
    data = data.filter((book) => book.id !== +req.params.clothesId);
    res.status(204).end();
  } else
    res.status(404).json({ messeage: "product with this ID doesn't exist" });
};
exports.clothesDetail = (req, res) => {
  const myBook = data.find((book) => book.id === +req.params.clothesId);
  if (myBook) res.json(myBook);
  else res.status(404).json({ messeage: "Path Not found" });
};
// testing
exports.clothesList = (req, res) => res.json(data);
