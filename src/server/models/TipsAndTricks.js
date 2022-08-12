const mongoose = require("mongoose");

const TipsAndTricksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TipsAndTricks", TipsAndTricksSchema);
