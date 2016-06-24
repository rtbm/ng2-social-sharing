'use strict';
const express = require('express');
const router = express.Router();
const articles = require('../controllers/articles');

router.get('/', articles.findAll);

module.exports = router;
