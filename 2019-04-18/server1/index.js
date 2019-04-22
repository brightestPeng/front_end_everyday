const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname +"/static")));


app.get("/", (req, res) => {
  res.send({ status: true, user: "admin" });
});

app.listen(2333, () => {
  console.log(`listen on port 2333`);
});
