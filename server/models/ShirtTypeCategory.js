const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const ShirtTypeCategory = mongoose.model('ShirtTypeCategory', categorySchema);

module.exports = ShirtTypeCategory;