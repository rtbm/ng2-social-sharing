'use strict';
const express = require('express');
const router = express.Router();
const articles = require('../controllers/articles');

router.get('/', articles.findAll);
router.post('/', articles.save);
router.get('/confirm/:token', articles.confirm);
router.get('/reject/:token', articles.reject);

module.exports = router;
