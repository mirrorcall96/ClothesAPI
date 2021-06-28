const express = require("express");
const upload = require("../middleware/multer");
const {
  clothesCreate,
  clothesDelete,
  clothesDetail,
  clothesList,
  clothesUpdate,
  clothesFetch,
} = require("../controllers/clothes");

const router = express.Router();

router.param("clothesId", async (req, res, next, clothesId) => {
  const myProduct = await clothesFetch(clothesId);
  console.log(myProduct);
  if (!myProduct) next({ message: "Prodcut not found", status: 404 });
  req.myProduct = myProduct;
  next();
});

//router.post("/", upload.single("image"), clothesCreate);
router.delete("/:clothesId", clothesDelete);
router.post("/:clothesId", upload.single("image"), clothesUpdate);

router.get("/:clothesId", clothesDetail);
router.get("/", clothesList);

module.exports = router;
