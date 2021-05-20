axios.get('http://localhost:8888/getPrestador')
.then(function(response)
{
    //serv1
    var barra1 = document.createElement("p");
        barra1 = response.data[0].Especialidade;
        document.getElementById("barra1").innerHTML += barra1;
    var lista1 = document.getElementById("serv1").innerHTML;
        lista1 = lista1 +"<li>"+response.data[0].Nome+"</li>";
        lista1 = lista1 +"<li>"+response.data[0].Cidade+", "+response.data[0].Estado+"</li>";
        lista1 = lista1 +"<li>"+"Estrelas: "+response.data[0].Estrelas+"</li>";
        document.getElementById("serv1").innerHTML = lista1;
    //serv2
    var barra2 = document.createElement("p");
        barra2 = response.data[1].Especialidade;
        document.getElementById("barra2").innerHTML += barra2;
    var lista2 = document.getElementById("serv2").innerHTML;
        lista2 = lista2 +"<li>"+response.data[1].Nome+"</li>";
        lista2 = lista2 +"<li>"+response.data[1].Cidade+", "+response.data[1].Estado+"</li>";
        lista2 = lista2 +"<li>"+"Estrelas: "+response.data[1].Estrelas+"</li>";
        document.getElementById("serv2").innerHTML = lista2;
    //serv3
    var barra3 = document.createElement("p");
        barra3 = response.data[2].Especialidade;
        document.getElementById("barra3").innerHTML += barra3;
    var lista3 = document.getElementById("serv3").innerHTML;
        lista3 = lista3 +"<li>"+response.data[2].Nome+"</li>";
        lista3 = lista3 +"<li>"+response.data[2].Cidade+", "+response.data[2].Estado+"</li>";
        lista3 = lista3 +"<li>"+"Estrelas: "+response.data[2].Estrelas+"</li>";
        document.getElementById("serv3").innerHTML = lista3; 
    //serv4
    var barra4 = document.createElement("p");
        barra4 = response.data[3].Especialidade;
        document.getElementById("barra4").innerHTML += barra4;
    var lista4 = document.getElementById("serv4").innerHTML;
        lista4 = lista4 +"<li>"+response.data[3].Nome+"</li>";
        lista4 = lista4 +"<li>"+response.data[3].Cidade+", "+response.data[3].Estado+"</li>";
        lista4 = lista4 +"<li>"+"Estrelas: "+response.data[3].Estrelas+"</li>";
        document.getElementById("serv4").innerHTML = lista4; 
    //serv5
    var barra5 = document.createElement("p");
        barra5 = response.data[4].Especialidade;
        document.getElementById("barra5").innerHTML += barra5;
    var lista5 = document.getElementById("serv5").innerHTML;
        lista5 = lista5 +"<li>"+response.data[4].Nome+"</li>";
        lista5 = lista5 +"<li>"+response.data[4].Cidade+", "+response.data[4].Estado+"</li>";
        lista5 = lista5 +"<li>"+"Estrelas: "+response.data[4].Estrelas+"</li>";
        document.getElementById("serv5").innerHTML = lista5; 
    //serv6
    var barra6 = document.createElement("p");
        barra6 = response.data[5].Especialidade;
        document.getElementById("barra6").innerHTML += barra6;
    var lista6 = document.getElementById("serv6").innerHTML;
        lista6 = lista6 +"<li>"+response.data[5].Nome+"</li>";
        lista6 = lista6 +"<li>"+response.data[5].Cidade+", "+response.data[5].Estado+"</li>";
        lista6 = lista6 +"<li>"+"Estrelas: "+response.data[5].Estrelas+"</li>";
        document.getElementById("serv6").innerHTML = lista6; 
})
function perfil(number)
{
    axios.get('http://localhost:8888/getPrestador')
    .then(function(response)
    {
        if(number == 0)
        {
            var comercio = document.createElement("p");
            comercio = response.data[0].Comercial;
            document.getElementById("comercio1").innerHTML = comercio;
        }
    })
}