axios.get('http://localhost:3000/getPrestador')
.then(function(response)
{
    var lista1  = document.getElementById("serv1").innerHTML;
        lista1 = lista1 +"<li>"+response.data[0].Nome+"</li>";
        document.getElementById("serv1").innerHTML = lista1;
})