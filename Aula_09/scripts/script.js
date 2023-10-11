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