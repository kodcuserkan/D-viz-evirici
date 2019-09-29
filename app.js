const girilen = document.getElementById("amount");
const firstChange = document.querySelector("#firstCurrency");
const secondChange = document.querySelector("#secondCurrency");
const curr = new Currency("USD","TRY");
const ui = new UI(firstChange,secondChange);


eventListeners();

function eventListeners() {

    girilen.addEventListener("input",girilenFonk);
    firstChange.onchange =function () {
        curr.changeFirstCurrency(firstChange.options[firstChange.selectedIndex].textContent);
        ui.firstElementFunction();
    };
    secondChange.onchange = function () {
        curr.changeSecondCurrency(secondChange.options[secondChange.selectedIndex].textContent);
        ui.secondElementFunction();
    };
    
}

function girilenFonk() {
    
    curr.changeAmount(girilen.value);

    curr.exchange()
    .then(result => ui.resultFunction(result))
    .catch(err => console.log(err));
}