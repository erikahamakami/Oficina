var btn = document.querySelector('#btn');

var nome = document.getElementById("nome_completo").value;
var email = document.getElementById("email").value;
var numero = document.getElementById("telefone").value;
var endereco = document.getElementById("endereço").value;
var senha = document.getElementById("criar_senha").value;
// adicionar comercial, especialidade e cidade

btn.addEventListener("click", function (){
console.log('dentro do event listener');
  axios.post('http://localhost:3000/postCadastro',{
    // adicionar comercial, especialidade e cidade
    Nome: nome,
    Email: email,
    Telefone: numero,
    Endereço: endereco,
    Senha: senha
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

})