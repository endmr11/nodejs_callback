const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.get("/one", (req, res) => {
  var data = fs.readFileSync("input.txt");

  console.log(data.toString());
  console.log("Senkron Program");
  res.send(data.toString());
});

app.get("/two", (req, res) => {
  var value;
  fs.readFile("input.txt", function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
    value = data;
  });
  if (value == null) {
    res.send("Asenkron yapı kullandın beklemedin. Beklemen gerekti");
  } else {
    res.send(value);
  }
  console.log("Asenkron Program");
});

app.get("/three", (req, res) => {
  fs.readFile("input.txt", function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
    res.send(data.toString());
  });
  console.log("Asenkron Program");
});

app.listen(process.env.port || 3000, function () {
  console.log("PORT:3000");
});
