// Código cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);

  const res = document.querySelector('#resPerimetroCuadrado');
  res.innerText = value + 'cm * 4 = ' + perimetro + 'cm';
}

function createNode() {
  let container = document.querySelector("#showPerimetroCuadrado");
  let node = document.createElement('div');
    node.className = 'result';
    node.id = 'result-perimetro';
  let perimetro = document.createElement('p');
    perimetro.id = 'resPerimetroCuadrado';
    perimetro.innerText = 'Hola mundo'

  container.insertAdjacentElement('afterend', node);
  node.appendChild(perimetro);
}

function removeNode() {
  let node = document.querySelector('#result-perimetro');

  if (node === null) {
    return
  } else {
    node.remove();
  }
}

function showPerimetroCuadrado() {
  removeNode();
  createNode();
  calcularPerimetroCuadrado();
}


function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const areaCuadrado = value * value;
  
  const res = document.querySelector('#resAreaCuadrado');
  res.innerText = value + 'cm * '+ value + 'cm = ' + areaCuadrado + 'cm';
  res.insertAdjacentHTML('beforeend', '<sup>2</sup>');
}

function createNodeAreaCuadrado() {
  let container = document.querySelector("#showAreaCuadrado");
  let node = document.createElement('div');
    node.className = 'result';
    node.id = 'result-area';
  let perimetro = document.createElement('p');
    perimetro.id = 'resAreaCuadrado';

  container.insertAdjacentElement('afterend', node);
  node.appendChild(perimetro);
}

function removeNodeCuadrado() {
  let node = document.querySelector('#result-area');

  if (node === null) {
    return
  } else {
    node.remove();
  }
}

function showAreaCuadrado() {
  removeNodeCuadrado();
  createNodeAreaCuadrado();
  calcularAreaCuadrado();
}


// Código triángulo

function perimetroTriangulo(lado1,lado2,base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//Código círculo

const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}

//Reto: Calcular altura de tríangulos isósceles

function formatNumber (val) {
  let options = {style:'decimal', maximumFractionDigits: 2};
  let numberFormat =  new Intl.NumberFormat('es-CO',options);

  return numberFormat.format(val);
}

function alturaIsosceles(lado1,lado2,base) {
  if (lado1 == lado2) {
    const altura = Math.sqrt((lado1**2)-((base/2)**2));
    if (isNaN(altura)) {
      alert("Recuerda que uno de los lados no puede ser mayor a la suma de los otros dos lados.")
      return false;
    }
    else {
      return altura;
    }
  }
  else {
    alert("Error, los valores dados no corresponden a un tríangulo isósceles. Recuerde que un triángulo isósceles es un tipo de triángulo que tiene dos lados de igual longitud.");
    return false;
  }
}

//Aquí voy a interactuar con el HTML

function calcularAlturaTrianguloIso() {
  const inputBase = document.getElementById("BaseAltTriangulo").value;
  const inputLado1 = document.getElementById("Lado1AltTriangulo").value;
  const inputLado2 = document.getElementById("Lado2AltTriangulo").value;

  const altura = alturaIsosceles(inputLado1,inputLado2,inputBase);
  if (altura === false) {
    console.log('No se ingresaron los valores adecuados');
    return false;
  } else {
    const res = document.querySelector('#resAlturaTriangulo');

    res.innerText = 'La altura de tríangulo es: ' + formatNumber(altura) + 'cm.'
  }
}

function createNodeTriangulo() {
  let container = document.querySelector("#showAlturaTrianguloIso");
  let node = document.createElement('div');
    node.className = 'result';
    node.id = 'result-alturatriangulo';
  let perimetro = document.createElement('p');
    perimetro.id = 'resAlturaTriangulo';

  container.insertAdjacentElement('afterend', node);
  node.appendChild(perimetro);
}

function removeNodeTriangulo() {
  let node = document.querySelector('#result-alturatriangulo');

  if (node === null) {
    return
  } else {
    node.remove();
  }
}

function showAlturaTrianguloIso() {
  removeNodeTriangulo();
  createNodeTriangulo();
  const prueba = calcularAlturaTrianguloIso();
  
  if (prueba == false) {
    removeNodeTriangulo();
  }
}