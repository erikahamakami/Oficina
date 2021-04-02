const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'back\.env') });

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Post = require('../back/Models/schema');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/message', (req, res) => {
  res.send('hello world!');
})

app.post('/postCadastro', (req,res) => {
  const post = new Post({
    Nome: req.body.Nome,
    Email: req.body.Email,
    Telefone: req.body.Telefone,
    Endereço: req.body.Endereço,
    Senha: req.body.Senha
  })

  post.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({message: err});
    });
});


mongoose.connect("mongodb+srv://Luis:oficina@cluster0.q5tyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }, () => {
  console.log('conectado ao DB')
})

app.listen(port, () => {console.log("server started on port" + port)});

//GET, PUT, POST, DELETE
//nao havera delete