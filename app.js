const db = require("./db/models");
const express = require("express");
const cors = require("cors");

const clothesRouters = require("./routers/clothes");
const categoriesRouters = require("./routers/categories");

const port = 8000;
const app = express();
app.use(cors());

//db.sequelize.sync({ force: true });
db.sequelize.sync();
app.use(express.json());
app.use("/media", express.static("media"));
app.use("/clothes", clothesRouters);
app.use("/categories", categoriesRouters);
app.use((req, res, next) =>
  res.status(404).json({ message: "Path Not Found" })
);
app.use((err, req, res, next) =>
  res
    .status(err.status ?? 500)
    .json({ message: err.message ?? "Internal Server Error" })
);
app.listen(port);
