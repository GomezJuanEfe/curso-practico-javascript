function formatNumber (val) {
  let options = {style:'currency', currency:'COP'};
  let numberFormat =  new Intl.NumberFormat('es-CO',options);

  return numberFormat.format(val);
}

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento
}

function onClickButtonPriceDiscount() {
  removeNode();
  createDivNode();
  calculateValues();
}

function calculateValues() {

  const InputPrice = document.getElementById("InputPrice").value;
  const InputDiscount = document.getElementById("InputDiscount").value;

  const precioConDescuento = calcularPrecioConDescuento(InputPrice,InputDiscount);

  const amount = document.getElementById("amount");
  const discount = document.getElementById("discount");
  const total = document.getElementById("total");

  amount.innerText = "Subtotal: "  +  formatNumber(InputPrice);
  discount.innerText = "Descuento (" + InputDiscount + "%): " + "-" + formatNumber(InputPrice*(InputDiscount/100));
  total.innerText = "Total: " + formatNumber(precioConDescuento);
}

//Descuento con cupones
const coupons = [
  {
    name: "Martes",
    discount: 10,
  },
  {
    name: "Black_friday",
    discount: 15,
  },
  {
    name: "Domingo_saludable",
    discount: 20,
  }
]



function onClickButtonPriceDiscountCupon(){
  const InputPriceCupon = document.getElementById("InputPriceCupon").value;
  const InputDiscountCupon = document.getElementById("InputDiscountCupon").value;

  const resultC = document.getElementById("ResultC");
  
  const isCouponValueValid = function (coupon) {
    return coupon.name === InputDiscountCupon;
    };
  
  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    resultC.innerText = "El cupón no es valido"
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(InputPriceCupon,descuento);

    resultC.innerText = "El precio con descuento del "+ descuento + "% son: $" + precioConDescuento;
  }
}

const createDivNode = () => {

  let container = document.querySelector('.main');
  let node = document.createElement('div');
    node.className = "result";
  let amount = document.createElement('p');
    amount.id = "amount";
  let discount = document.createElement('p');
    discount.id = "discount";
  let total = document.createElement('p');
    total.id = "total";
  
  container.appendChild(node);
  
  node.appendChild(amount);
  node.appendChild(discount);
  node.appendChild(total);

  return container;
}

function removeNode() {
  let node = document.querySelector('.result');

  if (node === null) {
    return
  } else {
    node.remove();
  }
}