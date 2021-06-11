const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String,
});

const model = mongoose.model("Comment", CommentSchema, "comments");

module.exports = model;
