function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento
}

function onClickButtonPriceDiscount() {
  const InputPrice = document.getElementById("InputPrice").value;
  const InputDiscount = document.getElementById("InputDiscount").value;

  const precioConDescuento = calcularPrecioConDescuento(InputPrice,InputDiscount);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento
}

//Descuento con cupones
const coupon = [
  "Martes",
  "Black_friday",
  "Domingo_saludable"
]

function onClickButtonPriceDiscountCupon(){
  const InputPriceCupon = document.getElementById("InputPriceCupon").value;
  const InputDiscountCupon = document.getElementById("InputDiscountCupon").value;

  let descuento;

  switch (InputDiscountCupon) {
    case "Martes":
      descuento = 15;
    break;
    case "Black_friday":
      descuento = 20;
    break;
    case "Domingo_saludable":
      descuento = 30;
    break;
    default:
      descuento = "Cupón inválido";
  }

  const precioConDescuento = calcularPrecioConDescuento(InputPriceCupon,descuento);

  const resultC = document.getElementById("ResultC");
  resultC.innerText = "El precio con descuento son: $" + precioConDescuento;
}