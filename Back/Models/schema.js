const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  Nome: String,
  Telefone: Number
});

module.exports = mongoose.model('Posts', PostSchema);