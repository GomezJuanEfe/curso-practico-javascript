// Helpers (Utils)
function esPar(numerito) {
  return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
    
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//Calcualdora de medianas
function medianaSalarios(lista){
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

//Mediana General

function salariosColSorted() {
  const salariosCol = colombia.map(
    function(personita) {
      return personita.salary;
    }
  );
  
  const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
      return salaryA - salaryB;
    }
  );
  
  return salariosColSorted;
}

const medianaGeneralCol = () => {
  const salariosToAnalize = salariosColSorted();
  return medianaSalarios(salariosToAnalize);
}

//Mediana del top 10%

function medianaTop10Col() {
  const salariosToAnalize = salariosColSorted();

  const spliceStart = (salariosToAnalize.length * 90) / 100;
  const spliceCount = salariosToAnalize.length - spliceStart;
  
  const salariosColTop10 = salariosToAnalize.splice(
    spliceStart,
    spliceCount,
  );
  
  const medianaTop10Col = medianaSalarios(salariosColTop10);
  return medianaTop10Col;
}

//

console.log({
  medianaGeneralCol,
  medianaTop10Col,
});


//Interacción con el DOM

const inputName = document.getElementById('name-person');
const inputSalary = document.getElementById('salary-person');

function addElementToArray() {
  colombia.push({
  name: inputName.value,
  salary: parseInt(inputSalary.value)
  })
}

function createDivPerson(name, salary) {
  const node = document.querySelector('#person');

  const divPerson = document.createElement('div');
    divPerson.className = 'element';

  const nameP = document.createElement('p');
    nameP.innerText = 'Nombre: ' + name;
  const salaryP = document.createElement('p');
    salaryP.innerText = 'Salario: ' + salary

  node.appendChild(divPerson);
  divPerson.appendChild(nameP);
  divPerson.appendChild(salaryP);
}

function showArrayElements() {
  for (let i = 0; i < colombia.length; i++) {
    createDivPerson(colombia[i].name,colombia[i].salary);
  }
}


function addPerson() {
  if (inputName.value === '' || inputName.value === '' ) {
    alert('Debe ingresar valores válidos');
  } else {
    removeDivPersonElements();
    addElementToArray();
    showArrayElements();
  }
}

function removeArrayElements() {
  colombia = [];
  console.log(colombia);
}

function removeDivPersonElements() {
  const allDivPersonElements = document.querySelectorAll('.element');
  const allDivPersonElementsArr = [...allDivPersonElements];
  
  for (let i = 0; i < allDivPersonElementsArr.length; i++) {
    allDivPersonElementsArr[i].remove();
  }
}

function removeAll() {
  removeArrayElements();
  removeDivPersonElements();
}