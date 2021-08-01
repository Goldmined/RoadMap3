const Movie = require("../model/mongo/Movie");
const list = async (req, res, next) => {
  try {
    const {skip=0,limit=10} = req.query
    const criteria = {};
    if (req.query.year) {
      criteria.year = req.query.year;
    }
    res.json({
      count: await Movie.countDocuments(criteria),
      items: await Movie.find(criteria).skip(+skip).limit(+limit),
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    res.json({
      item: await Movie.findById(req.params.id),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { list, getById };
