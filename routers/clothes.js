const express = require("express");
const {
  clothesCreate,
  clothesDelete,
  clothesDetail,
  clothesList,
} = require("../controllers/clothes");

const router = express.Router();

router.post("/", clothesCreate);
router.delete("/:clothesId", clothesDelete);
router.get("/:clothesId", clothesDetail);
router.get("/", clothesList);

module.exports = router;
