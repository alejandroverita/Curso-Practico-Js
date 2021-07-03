const discountPrice = (price, discount) => (price * (100 - discount)) / 100;


const discountProductPrice = () => {

    /* captura valores de los inputs html */
    let inputPrice = document.getElementById("inputPrice").value;

    let inputDiscount = document.getElementById("inputDiscount").value;

    let inputCoupon = document.getElementById("inputCoupon").value;

    let finalPrice;

    if (inputPrice && inputDiscount<=100){
        switch(inputCoupon){
            case "abc":
                inputDiscount = inputDiscount + 10;
                break;
            case "def":
                inputDiscount = inputDiscount + 15;
                break;
            case "ghi":
                inputDiscount = inputDiscount + 20;
            break;
            default:
                inputDiscount = inputDiscount;
                break;
        }

        finalPrice = discountPrice(inputPrice, inputDiscount);

        printInitialPrice(inputPrice);
        printResult(finalPrice);
        printDiscount(inputDiscount);

    } else if (descuento>=100){
        printAlert("Demasiado Descuento");
    } else {
        printAlert("Faltan datos");
    }
}

const printResult = (info) => {
    let preciofinalNode = document.querySelector('.cardPrecioFinal')

    preciofinalNode.textContent = `Precio final: ${info.toFixed(2)}🎉`
}

const printAlert = (info) => {
    let preciofinalNode = document.querySelector('.cardPrecioFinal')

    preciofinalNode.textContent = info+"❗"
}

const printDiscount = (discount) => {
    let discountNode = document.querySelector('.card_discount')

    discountNode.textContent = `-${discount}%`
}

const printInitialPrice = (iprice) => {
    let priceInicial = document.querySelector('.cardPrecioInicial')

    priceInicial.textContent = `Precio inicial: ${iprice}`
}

    /* const coupons = [
        {
            name: "abc",
            discount: 15,
        },
        {
            name: "def",
            discount: 30,
        },
        {
            name: "ghi",
            discount: 25,
        },
    ];

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + inputCoupon + " no es válido");
    }
    else {
        const discount = userCoupon.discount;
        const totalDiscount = discountPrice(inputPrice, discount);
    
        const finalPrice = document.getElementById("finalPrice");
        finalPrice.innerText = `El precio final con descuento es ${totalDiscount} usd`;
    } */
