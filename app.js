//--- Constants ----//



// Calc display
let display = document.getElementById("display");
// Math operator buttons
const addBtn = document.getElementById("add-btn");
const subBtn = document.getElementById("subtract-btn");
const multBtn = document.getElementById("multiply-btn");
const divBtn = document.getElementById("divide-btn");
// Clear button
const clearBtn = document.getElementById("clear-btn");

//---- Functions ----//
function add() {
  addBtn.addEventListener("click", function () {
    display = this.innerHTML;
  });
}

// Clear display
function clear() {
  display = "";
}
