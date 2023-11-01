function alterarTitulo() {
    var novoTexto = prompt("Digite um novo título:");
    document.getElementById("titulo").textContent = novoTexto;
}

function alterarP() {
    var novoTexto = prompt("Digite o novo p:");
    document.getElementById("p").textContent = novoTexto;
}

function alterarTitulo2() {
    var novoTexto = prompt("Digite um novo titulo:");
    document.getElementById("titulo2").textContent = novoTexto;
}

//==========================================================================
//==========================================================================

function alterarP1() {
    var p1 = prompt [0];
    for (var i = 1; i <= 4; i++) {
       
        var p1 = prompt("Digite o novo p:");
        document.getElementsByTagName("p")[0].innerHTML = p1;
        document.getElementsByTagName("p")[1].innerHTML = p1;
        document.getElementsByTagName("p")[2].innerHTML = p1;
        document.getElementsByTagName("p")[3].innerHTML = p1;
    }
}
  
   

