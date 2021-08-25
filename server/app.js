require("dotenv").config();
require("./model/mongo/db");
const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const UserController = require("./controller/User");
const PostController = require("./controller/Post");
const CommentController = require("./controller/Comment");
const MovieController = require("./controller/Movie");

app.use(express.static("public"));
  
//
app.use(cors());

app.get("/users", UserController.list);
app.get("/users/:id", UserController.getById);

// --------post--------
app.get("/posts", PostController.list);
app.get("/posts/:id", PostController.getById);

//-----------comment----------- 
app.get("/comments", CommentController.list);
app.get("/comments/:id", CommentController.getById);
 
//-----------movies----------- 
app.get("/movies", MovieController.list);
app.get("/movies/:id", MovieController.getById);
 
// мидл веар, промежуточное по
app.use("*", (req, res) => {
  res.status(404).json({
    message: "404 Not Found",
  });
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  console.log({ err });
  res.status(statusCode).send({
    message: statusCode === 500 ? "На сервере произошла ошибка" : message,
  });
});

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});
//10-45 