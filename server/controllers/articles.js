'use strict';
const Article = require('./../models/article');
const config = require('./../config');
const mailer = require('./../utils/mailer');
const redisClient = require('redis').createClient();
const validator = require('validator');
const md5 = require('md5');

module.exports = {
  findAll: (req, res, next) => {
    redisClient.get('articles', (err, articles) => {
      if (err) return next(err);

      if (articles) {
        res.setHeader('Content-Type', 'application/json');
        return res.send(articles);
      }

      Article.find({ published: true })
        .sort({ createdAt: -1 })
        .select('url name createdAt')
        .exec((err, docs) => {
          if (err) return next(err);

          const articles = JSON.stringify(docs);
          redisClient.set('articles', articles);

          res.setHeader('Content-Type', 'application/json');
          return res.end(articles);
        });
    });
  },

  save: (req, res, next) => {
    if (!validator.isURL(req.body.url)) {
      let err = new Error('Bad Request');
      err.status = 400;
      return next(err);
    }

    const article = new Article({
      name: req.body.name,
      url: req.body.url,
    });

    article.save((err, article) => {
      if (err) return next(err);

      const token = md5(config.secret + article._id);
      redisClient.set(token, article._id.toString());

      const body = `
        <p>
          ${validator.escape(req.body.name)}<br />
          <a href="${req.body.url}">${req.body.url}</a><br />
        </p>
        <p>
          <a href="${config.baseUrl}api/articles/confirm/${token}">Confirm</a> or
          <a href="${config.baseUrl}api/articles/reject/${token}">Reject</a>
        </p>
      `;

      mailer.send(config.adminEmail, '[RTBM.space] New submission', body);

      return res.json(article);
    });
  },

  confirm: (req, res, next) => {
    redisClient.get(req.params.token, (err, _id) => {
      if (err) return next(err);

      if (!_id) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      Article.findOne({ _id }, (err, doc) => {
        if (err) return next(err);
        if (!doc) {
          err = new Error('Not Found');
          err.status = 404;
          return next(err);
        }

        doc.published = true;

        doc.save((err, doc) => {
          if (err) return next(err);
          redisClient.del(req.params.token);
          redisClient.del('articles');
          return res.json(doc);
        });
      });
    });
  },

  reject: (req, res, next) => {
    redisClient.get(req.params.token, (err, _id) => {
      if (err) return next(err);

      if (!_id) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      Article.findOne({ _id }, (err, doc) => {
        if (err) return next(err);

        if (!doc) {
          err = new Error('Not Found');
          err.status = 404;
          return next(err);
        }

        doc.remove((err) => {
          if (err) return next(err);
          redisClient.del(req.params.token);
          return res.json({});
        });
      });
    });
  },
};
