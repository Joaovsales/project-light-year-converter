function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmAnosLuz = parseFloat(valor);
    var valorEmKm = valorEmAnosLuz / 0.0000000000001057;
    var valorEmHoras = parseInt(valorEmKm / 80);
    var valorEmDias = parseInt(valorEmHoras / 24);
    var valorEmAnos = Math.floor(valorEmDias / 365);
    var valorEmDiasRestantes = valorEmDias % 365;
    console.log("valor em horas" + valorEmHoras);
    console.log("valor em dias" + valorEmDias);
    console.log("valor em anos" + valorEmAnos);
    console.log("valor em dias restantes" + valorEmDiasRestantes);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "O resultado em quilômetros é " +
      valorEmKm +
      " km." +
      "\nViajando de carro a 80 km por hora ininterruptamente você demoraria aprox. " +
      valorEmAnos +
      " anos e " +
      valorEmDiasRestantes +
      " dias para chegar.";
    elementoValorConvertido.innerHTML = valorConvertido;
  }