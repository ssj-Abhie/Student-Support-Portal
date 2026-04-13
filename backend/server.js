const express = require("express");
const cors = require("cors");
const { schemes, exams, careers } = require("./data/sampleData");

const app = express();
app.use(cors());

// cache processed schemes
let cachedSchemes = [];

function processSchemes() {
  const today = new Date();

  cachedSchemes = schemes.map(s => {
    const diff = Math.ceil((new Date(s.deadline) - today) / (1000 * 60 * 60 * 24));

    let alert = "";
    if (diff < 0) alert = "Expired";
    else if (diff <= 7) alert = "Last Date Soon";
    else if (diff <= 30) alert = "Closing This Month";

    return { ...s, daysLeft: diff, alert };
  });
}

processSchemes();

app.get("/schemes", (req, res) => {
  const { state, search } = req.query;

  let data = cachedSchemes;

  if (state) data = data.filter(s => s.state === state || s.state === "All");
  if (search) data = data.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  res.json(data);
});

app.get("/exams", (req, res) => res.json(exams));
app.get("/careers", (req, res) => res.json(careers));

app.get("/", (req, res) => res.send("OK"));

app.listen(10000, () => console.log("Server running"));