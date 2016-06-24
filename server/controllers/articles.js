'use strict';
const article = require('../models/article');
const redisClient = require('redis').createClient();

module.exports = {
  findAll: (req, res, next) => {
    redisClient.get('articles', (err, articles) => {
      if (err) next(err);

      if (articles) {
        res.setHeader('Content-Type', 'application/json');
        return res.send(articles);
      }

      article.find({})
        .sort({ createdAt: -1 })
        .exec((err, docs) => {
          if (err) next(err);

          const articles = JSON.stringify(docs);
          redisClient.set('articles', articles);

          res.setHeader('Content-Type', 'application/json');
          return res.end(articles);
        });
    });
  },
};
