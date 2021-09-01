function calcularModa(lista) {
  const lista1Count = {};

  lista.map(function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else{
        lista1Count[elemento] = 1;
      }
    }
  );

  const lista1Array = Object.entries(lista1Count).sort(
      function (elementoA, elementoB) {
          return elementoA[1] - elementoB[1];
      }
  )

  const moda = lista1Array[lista1Array.length - 1];

  return moda
}

function showModa() {
  inputModa = document.getElementById("InputList").value;

  const separedValues = inputModa.split(",");
  
  for (let i = 0; i < separedValues.length; i++) {
    separedValues[i] = Number(separedValues[i]);
  }

  const resultado = calcularModa(separedValues);

  const modaP = document.getElementById("ModaP");

  modaP.innerText = "La moda es " + resultado[0] + ", que se repite " + resultado[1] + " veces.";
}