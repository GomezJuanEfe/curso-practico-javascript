function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
    
  const promedioLista = sumaLista / lista.length;
  
  return promedioLista;
}

function formatNumber(val) {
  let options = {style:'decimal', maximumFractionDigits: 2};
  let numberFormat =  new Intl.NumberFormat('es-CO',options);

  return numberFormat.format(val);
}

function showPromedioFn() {
  removeNode();
  createNode();

  input = document.getElementById('InputList').value;

  const separedValues = input.split(",");
  
  for (let i = 0; i < separedValues.length; i++) {
    separedValues[i] = Number(separedValues[i]);
  }

  const resultado = calcularMediaAritmetica(separedValues);

  const res = document.getElementById('resPromedio');

  res.innerText = 'El promedio es: ' + formatNumber(resultado);
}

function createNode() {
  let container = document.querySelector('#showPromedio');
  let node = document.createElement('div');
    node.className = 'result';
    node.id = 'result-Promedio';
  let res = document.createElement('p');
    res.id = 'resPromedio';

  container.insertAdjacentElement('afterend', node);
  node.appendChild(res);
}

function removeNode() {
  let node = document.querySelector('#result-Promedio');

  if (node === null) {
    return
  } else {
    node.remove();
  }
}