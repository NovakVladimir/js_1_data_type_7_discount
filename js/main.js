
function calcDiscount() {
    let startPrice = +document.getElementById("money").value;
    let discount = 0;
    let result = startPrice;
    switch(true) {
        case startPrice >= 200 && startPrice < 300:
        discount = startPrice * 0.03;
        result = startPrice - discount;
        break;
        case startPrice >= 300 && startPrice < 500:
        discount = startPrice * 0.05;
        result = startPrice - discount;
        break;
        case startPrice >= 500:
        discount = startPrice * 0.07;
        result = startPrice - discount;
        break;
    }
    document.getElementById("discount").innerHTML = `Your discount is ${discount}`;
    document.getElementById("result").innerHTML = `The result purchase amount is ${result}`;
}