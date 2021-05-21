var btn = document.querySelector('#btn');

btn.addEventListener("click", async (event)=>{
  event.preventDefault()
  var nome = document.getElementById("nome_completo").value;
  var email = document.getElementById("email").value;
  var numero = document.getElementById("telefone").value;
  var endereco = document.getElementById("endereço").value;
  var cidade = document.getElementById("cidade").value;
  var nome_comercial = document.getElementById("nome_comercial").value;
  var especialidade = document.getElementById("especialidade").value;
  var estrelas = 3; //por padrão
  var categoria = "Prestador"; //por padrão

  console.log('dentro do event listener');
  var senha = document.getElementById("criar_senha").value;
  await axios.post('http://localhost:8888/postCadastro',{

    Nome: nome,
    Comercial: nome_comercial,
    Especialidade: especialidade,
    Email: email,
    Telefone: numero,
    Cidade: cidade,
    Endereço: endereco,
    Senha: senha,
    Estrelas: estrelas,
    Categoria: categoria

  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  window.location.href = "login.html" 
})