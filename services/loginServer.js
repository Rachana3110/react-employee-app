const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const empData = [];

app.get("/api/employeedata", (req, res) => {
  res.json(empData);
});
app.post("/api/employeedata", (req, res) => {
  empData.push(req.body);
  res.json(empData);
});

app.listen(3001, () =>
  console.log(
    "Run API using node <filename> in terminal and API starts running on http://localhost:3001/api/employeedata"
  )
);
