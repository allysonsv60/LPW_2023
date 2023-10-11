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
  };