const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  postId: Number,
  id: Number,
  name: String,
  email: String,
  body: String,
});

const model = mongoose.model("Post", PostSchema, "posts");

module.exports = model;
