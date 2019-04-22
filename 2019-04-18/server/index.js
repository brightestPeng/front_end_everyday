const express = require("express");

const app = express();

app.use(express.static(__dirname +"/static"));

app.get("/", (req, res) => {
  res.send({ status: true, user: "admin" });
});

app.listen(2000, () => {
  console.log(`listen on port 2000`);
});
