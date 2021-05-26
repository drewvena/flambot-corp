const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const ColorCategory = mongoose.model('ColorCategory', categorySchema);

module.exports = ColorCategory;