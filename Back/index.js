const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'back\.env') });

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const dataSchema = require('../back/Models/schema');
const bodyParser = require('body-parser');
var cors = require('cors');


app.use(bodyParser.json());
app.use(cors());

app.get('/getPrestador',function(req,res){
  dataSchema.find(function(err,prestadores){
   if(err){
     console.log(err)
     }  
   else{
     res.send(prestadores)
   }
  })
 })
 
 app.post('/postCadastro', (req,res) => {
  const post = new dataSchema({
    Nome: req.body.Nome,
    Comercial: req.body.Comercial,
    Especialidade: req.body.Especialidade,
    Email: req.body.Email,
    Telefone: req.body.Telefone,
    Cidade: req.body.Cidade,
    Endereço: req.body.Endereço,
    Senha: req.body.Senha,
    Estrelas: req.body.Estrelas
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