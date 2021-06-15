const express = require("express");
const data = require("./data");

const port = 8000;
const app = express();
app.listen(port);
app.get("/clothes", (req, res) => {
  res.json(data);
});
