const express = require("express");
const empData = require("../src/data/empData.json");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/register", (req, res) => {
  res.json(empData);
});

app.post("/api/register", (req, res) => {
  empData.push(req.body);
  res.json(empData);
});

app.listen(3001, () =>
  console.log("Run API using node <filename> in terminal and API starts running on http://localhost:3001/api/login")
);
