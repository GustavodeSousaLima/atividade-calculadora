function calcular() {
    var v1 = Number(document.getElementById('valor1').value);
    var v2 = Number(document.getElementById('valor2').value);
    var operacao = document.getElementById('operacao').value;
    var resultadoFinal = document.getElementById('resultado');
    var resultado;
  
    switch (operacao) {
      case 'Adicionar': 
        resultado = v1 + v2;
        break;
      case 'Subtrair':
        resultado = v1 - v2;
        break;
      case 'Multiplicar':
        resultado = v1 * v2;
        break;
      case 'Dividir':
        resultado = v1 / v2;   
        break;            
    }
  
    resultadoFinal.innerHTML = "Resultado: " + resultado.toFixed(2);
  
}
  