var email_login = document.getElementById("email").value;
var senha_login = document.getElementById("senha").value;
var btn = document.getElementById("button_login");
var flag

async function chamaGet(){ 
    await axios.get('http://localhost:8888/getPrestador')
    .then(function(response)
    {
        for (const i in response.data) {
            if(response.data[i].Nome == this.email_login){
                
                if(response.data[i].Senha == this.senha_login){
                console.log("achei no banco")
                console.log(response.data[i].Nome)
                console.log(response.data[i].Senha)
                flag = 1
                }
            }
        }
    })
    

    
}

chamaGet()

btn.addEventListener("click", async function() {
    console.log(flag)
    if(flag == 1){
        console.log("email e senha validos")
        localStorage.setItem("Email", email.value)
        localStorage.setItem("Senha", senha.value)
        localStorage.setItem("Online", true)

    }
    else{
        console.log("email ou senha INvalidos, Inputados")
        console.log(email_login)
        console.log(senha_login)
        flag = 0
    } 
    location.reload()
})

var value

function salvaEmail(){
    email_login = document.getElementById("email").value;  
    senha_login = document.getElementById("senha").value;  
    location.reload()
}


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

