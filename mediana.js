function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
    
  const promedioLista = sumaLista / lista.length;
  
  return promedioLista;
}

/* function ordenarArray(arr) {
  const l = arr.length;
  for (let i = 0; i < l; i++ ) {
    for (let j = 0; j < l - 1 - i; j++ ) {
      if ( arr[ j ] > arr[ j + 1 ] ) {
        [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
      }
    }
  }

  return arr;
} */

function calcularMediana(lista) {
  lista = lista.sort(function comparar(a,b) {
    return a - b;
  });

  const mitadLista = parseInt(lista.length / 2);

  function esPar(numerito) {
    if (numerito % 2 === 0){
      return true;
    } else {
      return false;
    }
  }

  let mediana;

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ])

    mediana = promedioElemento1y2;
  } else {
    mediana = lista[mitadLista];
  }
  return mediana;
}

function showMediana() {
  removeNode();
  createNode();

  const inputList = document.getElementById("InputList").value;
  const separedValues = inputList.split(",");
  
  for (let i = 0; i < separedValues.length; i++) {
    separedValues[i] = Number(separedValues[i]);
  }

  const resultado = calcularMediana(separedValues);

  const res = document.getElementById('resMedia');

  res.innerText = "La mediana es: " + resultado;
}

function createNode() {
  let container = document.querySelector('#showMedia');
  let node = document.createElement('div');
    node.className = 'result';
    node.id = 'result-media';
  let res = document.createElement('p');
    res.id = 'resMedia';

  container.insertAdjacentElement('afterend', node);
  node.appendChild(res);
}

function removeNode() {
  let node = document.querySelector('#result-media');

  if (node === null) {
    return
  } else {
    node.remove();
  }
}