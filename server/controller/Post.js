const Post = require("../model/mongo/Post");
const list = async (req, res, next) => {
  try {
    const criteria = {};
    if (req.query.userId) {
      criteria.userId = req.query.userId;
    }
    res.json({
      items: await Post.find(criteria),
    });
  } catch (error) {
    next(error);
  }
};
const getById = async (req, res) => {
  try {
    res.json({
      item: await Post.findOne({ id: req.params.id }),
    });
  } catch (error) {
    next(error);
  }
};
module.exports={list, getById}
