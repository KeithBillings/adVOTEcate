const mongoose = require("mongoose");

const models = require("./models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/advotecate",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);


module.exports = models;