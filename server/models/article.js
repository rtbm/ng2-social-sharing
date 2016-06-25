const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  url: {
    type: String,
    trim: true,
    required: true,
  },
  timestamp: {
    type: Number,
    trim: true,
  },
  published: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Article', articleSchema);
