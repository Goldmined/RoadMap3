const Comment = require("../model/mongo/Comment");

const list = async (req, res, next) => {
  try {
    const criteria = {};
    if (req.query.postId) {
      criteria.postId = req.query.postId;
    }
    res.json({
      items: await Comment.find(criteria),
    });
  } catch (error) {
    next(error);
  }
};
const getById = async (req, res, next) => {
  try {
    res.json({
      item: await Comment.findOne({ id: req.params.id }),
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { list, getById };
