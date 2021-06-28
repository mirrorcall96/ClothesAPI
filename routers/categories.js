const express = require("express");
const upload = require("../middleware/multer");
const {
  categoriesCreate,
  categoriesDelete,
  categoriesDetail,
  categoriesList,
  categoriesUpdate,
  categoriesFetch,
  clothesCreate,
} = require("../controllers/categories");

const router = express.Router();

router.param("categoriesId", async (req, res, next, categoriesId) => {
  const myCategory = await categoriesFetch(categoriesId);
  console.log(myCategory);
  if (!myCategory) next({ message: "Prodcut not found", status: 404 });
  req.myCategory = myCategory;
  next();
});

router.post("/:categoriesId/clothes", upload.single("image"), clothesCreate);
router.post("/", upload.single("image"), categoriesCreate);

router.delete("/:categoriesId", categoriesDelete);
router.post("/:categoriesId", upload.single("image"), categoriesUpdate);

router.get("/:categoriesId", categoriesDetail);
router.get("/", categoriesList);

module.exports = router;
