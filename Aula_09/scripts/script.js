function calcular() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let calculo = document.querySelector('input[name="calculo"]:checked').value;

    

    switch (calculo) {
        case 'soma':
           num1 += num2;
            break;
        case 'subtracao':
            num1 -= num2;
            break;
        case 'multiplica':
            num1 *= num2;
            break;
        case 'divisao':
            if (num2 == 0) {
                document.getElementById('result').textContent = "não pode divisão por 0 ";
                
            } 
            else {
                num1 /= num2;
                
            }
            break;
    }

    document.getElementById('result').textContent ="Resultado é:" + num1;
}

function calcular() {
      
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    
    const imc = peso / (altura * 2);
   

    if (imc < 17) {
      aviso = "Muito abaixo do peso";
    } else if (imc >= 17 && imc < 18.5) {
      aviso = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      aviso = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      aviso = "Acima do peso";
    } else if (imc >= 30 && imc < 35) {
      aviso = "Obesidade I";
    } else if (imc >= 35 && imc < 40) {
      aviso = "Obesidade II (severa)";
    } else {
      aviso = "Obesidade III (mórbida)";
    }
    
    document.getElementById("resultado").innerHTML = "Seu IMC é " +imc+ "e sua situação é "+aviso;
  }

  function NomeCompleto() {
            
    var primeiroNome = document.getElementById("primeiroNome").value;
    var nomeMeio = document.getElementById("nomeMeio").value;
    var sobrenome = document.getElementById("sobrenome").value;

    
    var nomeCompleto = primeiroNome + " " + nomeMeio + " " + sobrenome;

    
    document.getElementById("nomeCompleto").textContent = "Seu Nome Completo: " + nomeCompleto;
}

function verificarPalavra() {
    var a = document.getElementById("palavraInput").value;
    var resultado = document.getElementById("resultado");
    a = a.toUppercase();

    var b = "";

    for (let i = a.length - 1; i >= 0; i--){
        b += a[i];
      
    }

    if (a === b) {
        resultado.textContent = "São palindromos";
    } else {
        resultado.textContent = "Não são palindromos";
        
    }


}

function contarVogais() {
            
    var palavra = document.getElementById("palavra").value;

    
    palavra = palavra.toLowerCase();

    
    var vogais = ['a', 'e', 'i', 'o', 'u'];

    
    var contador = 0;

    
    for (var i = 0; i < palavra.length; i++) {
        var caractere = palavra.charAt(i);

        
        if (vogais.indexOf(caractere) !== -1) {
            contador++;
        }
    }

    
    document.getElementById("numeroVogais").textContent = "Número de Vogais: " + contador;
}

function numero() {
            
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);
    var numero4 = parseFloat(document.getElementById("numero4").value);
    var numero5 = parseFloat(document.getElementById("numero5").value);

    
    var menorNumero = Math.min(numero1, numero2, numero3, numero4, numero5);

    
    var maiorNumero = Math.max(numero1, numero2, numero3, numero4, numero5);

    
    document.getElementById("menorNumero").textContent = "Menor Número: " + menorNumero;
    document.getElementById("maiorNumero").textContent = "Maior Número: " + maiorNumero;
}

function ordenarNumeros() {
    var numeros = [];
    for (var i = 1; i <= 5; i++) {
        var inputId = "numero" + i;
        var numero = parseFloat(document.getElementById(inputId).value);
        numeros.push(numero);
    }

    
    numeros.sort(function(a, b) {
        return b - a;
    });

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Números ordenados em ordem decrescente: " + numeros.join(", ");
}