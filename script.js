let bill = document.getElementById("billInput");
let tip = document.getElementById("tipInput");
let numPeople = document.getElementById("numberOfPeople");
let total = document.getElementById("perPersonTotal");


function calculateBill () {
    let billValue = parseInt(bill.value);
    let tipValue = parseInt(tip.value);
    
    if (isNaN(billValue)) billValue = 0;
    if (isNaN(tipValue)) tipValue = 0;
    
    result = billValue * (tipValue / 100) + billValue;
    total.innerText = "$" + result.toFixed(2) / people.value;
}



const people = {"value": 1}

plusButton.onclick = () => {
    people.value += 1
    numPeople.innerText = people.value;
    calculateBill()
}
minusButton.onclick = () => {
    if (people.value <= 1) {
        return
    }
    people.value -= 1
    numPeople.innerText = people.value;
    calculateBill()
}

