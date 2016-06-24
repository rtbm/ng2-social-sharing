'use strict';
const article = require('../models/article');

module.exports = {
  findAll: (req, res, next) => {
    article
      .find({})
      .sort({ createdAt: -1 })
      .exec((err, articles) => {
        if (err) next(err);
        return res.json(articles);
      });
  },
};
