var mongoose = require("mongoose");
var TodoSchema = new mongoose.Schema({
  name: String,
  matricule: String,
  score: Number,
  status: Boolean,
  email_user : String,

});
mongoose.model("TodoSchema", TodoSchema);

module.exports = mongoose.model("TodoSchema");
