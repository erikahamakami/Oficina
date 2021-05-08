var btn = document.querySelector('#btn');

var nome = document.getElementById("nome_completo").value;
var email = document.getElementById("email").value;
var numero = document.getElementById("telefone").value;
var endereco = document.getElementById("endereço").value;
var senha = document.getElementById("criar_senha").value;
var cidade = document.getElementById("cidade").value;
var nome_comercial = document.getElementById("nome_comercial").value;
var especialidade = document.getElementById("especialidade").value;
var estrelas = 3;
// adicionar comercial, especialidade e cidade

btn.addEventListener("click", function (){
console.log('dentro do event listener');
  axios.post('http://localhost:3000/postCadastro',{
    // adicionar comercial, especialidade e cidade
    Nome: nome,
    Comercial: nome_comercial,
    Especialidade: especialidade,
    Email: email,
    Telefone: numero,
    Cidade: cidade,
    Endereço: endereco,
    Senha: senha,
    Estrelas: estrelas

  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

})