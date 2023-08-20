let count = 0; //counting purchased product 
let promoCode = document.getElementById("promo-code");
let promoBtn = document.getElementById("promo-btn");
let purchaseBtn = document.getElementById("purchase-btn");

function myFunction(event) {
    const id = event.currentTarget.id;

    //calling calculation functions
    calcTotalPrice(id);  
    calcTotal(id); 
    //updating cart
    cart(id);
}

//updating total price 
let calcTotalPrice = (id) => {
    let element = document.getElementById(id);
    let price = parseFloat(element.querySelector(".card-price").textContent); //string
    let totalPriceVal = document.getElementById("total-price")
    let totalPrice = parseFloat(totalPriceVal.textContent);

    totalPrice += price;
    totalPriceVal.innerHTML = totalPrice

    if (totalPrice > 0) {
        purchaseBtn.disabled = false;
    }

    if (totalPrice >= 200) {
        promoBtn.disabled = false;
    }
}
//UPDATING TOTAL 
let calcTotal = (id) => {
    let element = document.getElementById(id);
    let price = parseFloat(element.querySelector(".card-price").textContent); //string
    let totalVal = document.getElementById("total")
    let total = parseFloat(totalVal.textContent);

    total += price;
    totalVal.innerHTML = total
}
//discount function 
let discount = () => {
    let totalPriceVal = document.getElementById("total-price");
    let totalPrice = parseFloat(totalPriceVal.textContent);
    let totalVal = document.getElementById("total");
    let total = parseFloat(totalVal.textContent);
    let promo = promoCode.value;

    if((totalPrice >= 200) && (promo === 'SELL200')) {
        
        promoBtn.addEventListener('click', () => {
            //calculating discount 
            let discount = document.getElementById("discount");
            let discountVal = parseFloat(discount.textContent);

            discountVal = (totalPrice * 20) / 100;
            discount.innerHTML = discountVal.toFixed(2);
            
            total = totalPrice - discountVal;
            totalVal.innerHTML = total.toFixed(2);
            discountVal = 0;
        })
    }
}

//updating cart
let cart = (id) => {
    let orderList = document.getElementById('order-list')
    let list = document.createElement('li');
    let element = document.getElementById(id);
    let item = element.querySelector(".card-title").textContent; //get title
    
    count += 1;

    list.textContent = `${count}. ${item}`;
    orderList.appendChild(list);
}

// GO HOME BUTTON FUNCTION
let goHome = () => {
    let orderList = document.getElementById('order-list')
    let totalPriceVal = document.getElementById("total-price");
    let totalVal = document.getElementById("total");
    let discount = document.getElementById("discount");
    let modal = document.getElementById('my_modal_5');

    orderList.innerHTML = '';
    totalPriceVal.innerHTML = '00.00';
    totalVal.innerHTML = '00.00';
    discount.innerHTML = '00.00';
    promoCode.value = '';
    count = 0;
    purchaseBtn.disabled = true;
    promoBtn.disabled = true;
    modal.close();
    window.location.href = "./index.html";
}