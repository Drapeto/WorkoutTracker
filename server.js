const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true, useCreateIndex: true });




app.listen(PORT, function() {
    console.log(`Now listening on port: ${PORT}`);
  });
