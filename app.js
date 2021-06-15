const express = require("express");
const clothesRouters = require("./routers/clothes");
const port = 8000;
const app = express();
app.use(express.json());
app.use("/clothes", clothesRouters);
app.listen(port);
