'use strict';
const config = require('./config');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const compression = require('compression');
const winston = require('winston');
const logger = require('./utils/logger');

const app = express();
const distPath = path.join(__dirname, '../public');

mongoose.connect(config.database);

if(app.get('env') === 'development') {
  app.use(require('morgan')('dev', { stream: logger.stream }));
  app.use(require('cors')());
}

app.use(express.static(distPath, {
  cacheControl: true,
  maxAge: 86400000,
}));

app.use(compression());

app.use('/api/articles', require('./routes/articles'));
app.use('*', (req, res) => res.sendFile(path.join(distPath, 'index.html')));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

app.use((err, req, res, next) => {
  logger.error('error', err);
  res.status(err.status || 500);
  res.send();
});


module.exports = app;
