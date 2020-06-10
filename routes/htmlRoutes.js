const path = require("path");

module.exports = function (app) {

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});


// GET route exercise
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "exercise.html"));
});

//  GET route for /stats

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "stats.html"));
});

};