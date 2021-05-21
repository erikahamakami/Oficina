var btn = document.getElementById("button_login");
var cond;
async function chamaGet(){ 
    await axios.get('http://localhost:8888/getPrestador')
    .then(function(response)
    {
        for (const i in response.data) {
            if(response.data[i].Nome == localStorage.getItem("Email")){
                if(response.data[i].Senha == localStorage.getItem("Senha")){
                console.log("achei no banco")
                console.log(response.data[i].Nome)
                console.log(response.data[i].Senha)
                console.log("email e senha validos")
                localStorage.setItem("Online", true)
                window.location.href = "index.html"
                break
                }
                else{
                    localStorage.setItem("Online", false)
                }
            }
            else{
                localStorage.setItem("Online", false)
            }
        }
        if (localStorage.getItem("Online") != "true")
        {
            alert("Dados inválidos")
        }
    })
}

btn.addEventListener("click", (event) => {
    event.preventDefault()
    var email_login = document.getElementById("email").value;  
    var senha_login = document.getElementById("senha").value;  
    localStorage.setItem("Email", email_login)
    localStorage.setItem("Senha", senha_login)
    chamaGet()
      // if(flag >= 1){
    //     console.log("email e senha validos")
    //     localStorage.setItem("Online", true)
    // }
    // else{
    //     console.log("email ou senha INvalidos, Inputados")
    //     localStorage.setItem("Online", false)
    //     console.log(email_login)
    //     console.log(senha_login)
    // }
    // location.reload()
})

// async function noClique(){
//     console.log("cliquei")
//     try{
//     console.log("teste")
//     const resposta = await axios.get('http://localhost:8888/getPrestador')
//     .then(function(response)
//     {
//         console.log(response)
//     })
    
//     }

//     catch(e){
//         console.log(e)
//     }
// }


// btn.addEventListener("click", function (){
//     console.log("cliquei")
//     axios.get('http://localhost:8888/getPrestador')
//     .then(function(response)
//     {
//         console.log(response)
//     })
    
// })

