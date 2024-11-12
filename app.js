//--- Constants ----//

let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");

// Calc display
let sumEl = document.getElementById("sum-el");
// Math operator buttons
const addBtn = document.getElementById("add-btn");
const subBtn = document.getElementById("subtract-btn");
const multBtn = document.getElementById("multiply-btn");
const divBtn = document.getElementById("divide-btn");
// Clear button
const clearBtn = document.getElementById("clear-btn");

//---- Functions ----//
function add() {
  addBtn.addEventListener("click", (e) => {
    sumEl.innerHTML = num1 + num2;
  });
}
function subtract() {
  subBtn.addEventListener("click", (e) => {
    sumEl.innerHTML = num1 - num2;
  });
}
function add() {
  multBtnBtn.addEventListener("click", (e) => {
    sumEl.innerHTML = num1 * num2;
  });
}
function add() {
  divBtn.addEventListener("click", (e) => {
    sumEl.innerHTML = num1 / num2;
  });
}
// Clear display
function clear(){
    sumEl = ''
}