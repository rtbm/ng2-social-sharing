'use strict';
const config = require('./config');
const express = require('express');
const winston = require('winston');
const path = require('path');
const mongoose = require('mongoose');
const logger = require('./utils/logger');
const cors = require('cors');

const distPath = path.join(__dirname, '../public');

const app = express();

mongoose.connect(config.database);

app.use(cors());

app.use(express.static(distPath));

app.use('/api/articles', require('./routes/articles'));
app.use('*', (req, res) => res.sendFile(path.join(distPath, 'index.html')));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(require('morgan')('dev', { stream: logger.stream }));

  app.use((err, req, res, next) => {
    winston.log('error', err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send();
});


module.exports = app;