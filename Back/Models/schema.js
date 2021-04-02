const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  Nome: String,
  Email: String,
  Telefone: Number,
  Endereço: String,
  Senha: String
});

module.exports = mongoose.model('Posts', PostSchema);