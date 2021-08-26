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