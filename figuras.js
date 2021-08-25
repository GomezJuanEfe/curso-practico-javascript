// Código cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
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

function alturaIsosceles(lado1,lado2,base) {
  if (lado1 == lado2) {
    const altura = Math.sqrt((lado1**2)-((base/2)**2));
    if (isNaN(altura)) {
      alert("Recuerda que uno de los lados no puede ser mayor a la suma de los otros dos lados.")
    }
    else {
      return altura;
    }
  }
  else {
    alert("Error, los valores dados no corresponden a un tríangulo isósceles. Recuerde que un triángulo isósceles es un tipo de triángulo que tiene dos lados de igual longitud.");
  }
}

//Aquí voy a interactuar con el HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularAlturaTrianguloIso(){
  const inputBase = document.getElementById("BaseAltTriangulo").value;
  const inputLado1 = document.getElementById("Lado1AltTriangulo").value;
  const inputLado2 = document.getElementById("Lado2AltTriangulo").value;

  const altura = alturaIsosceles(inputLado1,inputLado2,inputBase);
  alert("La altura del triángulo isósceles es: " + altura);
}