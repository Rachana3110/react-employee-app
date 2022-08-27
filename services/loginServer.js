const express = require("express");
const loginData = require("../src/data/loginData");
const configData = require("../src/data/configData.json");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/login", (req, res) => {
  res.json(loginData);
});

app.post("/api/login", (req, res) => {
  loginData.push(req.body);
  res.json(loginData);
});

app.put("/api/login", (req, res) => {
  loginData.forEach((element, index) => {
    element.Employee_ID_Number = req.body.Employee_ID_Number;
    element.Password = req.body.Password;
  });
  res.json(loginData);
});

app.get("/api/employeedata", (req, res) => {
  res.json(configData);
});
app.post("/api/employeedata", (req, res) => {
  configData.push(req.body);
  res.json(configData);
});

app.listen(3001, () =>
  console.log(
    "Run API using node <filename> in terminal and API starts running on http://localhost:3001/api/login"
  )
);
