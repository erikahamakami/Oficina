
var btn = document.querySelector('#btn');




btn.addEventListener("click", async (event) =>{
  event.preventDefault()

  var nome = document.getElementById("nome_completo").value;
  var email = document.getElementById("email").value;
  var numero = document.getElementById("telefone").value;
  var endereco = document.getElementById("endereço").value;
  var cidade = document.getElementById("cidade").value;
  var categoria = "Cliente"; //por padrão


  var senha = document.getElementById("password").value;
  console.log('dentro do event listener');
  console.log(senha);

  await axios.post('http://localhost:8888/postCadastro',{

    Nome: nome,
    Email: email,
    Telefone: numero,
    Cidade: cidade,
    Endereço: endereco,
    Senha: senha,
    Categoria: categoria

  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  location.reload()
  window.location.href = "login.html"
})