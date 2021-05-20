const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  Nome: String,
  Comercial: String,
  Especialidade: String,
  Email: String,
  Telefone: Number,
  Cidade: String,
  Endereço: String,
  Senha: String,
  Estrelas: Number,
  Categoria: String
  // Nome comercial especialidade cidade estrelas
});

module.exports = mongoose.model('Posts', PostSchema);