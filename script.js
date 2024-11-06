dollarInput = document.getElementById("dollar-input");
peopleInput = document.getElementById("people-input");
selectionGridContainer = document.getElementById("selection-grid");
selectionGrid = document.getElementsByClassName("tip-selection");
tipAmountContainer = document.getElementById("tip-amount");
tipTotalContainer = document.getElementById("tip-total");
resetButton = document.getElementById("reset-button");
let dollar = 0;
let people = 1;
let tipAmount = 0;
let tipTotal = 0;
let tipFactor = 0.05;

function handleSelectionGrid(e) {
  if (
    (e.target.tagName === "BUTTON" || e.target.tagName === "INPUT") &&
    !e.target.classList.contains("active")
  ) {
    console.log(e.target.tagName);

    Array.from(selectionGrid).forEach((element) => {
      element.classList.remove("active");
    });

    e.target.classList.add("active");

    if (e.target.tagName === "BUTTON") {
      tipFactor = Number(e.target.id.replace("%", "")) / 100;
    }
  }
  if (e.target.tagName === "INPUT") {
    tipFactor = e.target.value / 100;
  }
  console.log(tipFactor);
  calculate();
  populate();
}

function handleDollarInput(e) {
  dollar = dollarInput.value;
  calculate();
  populate();
}

function handlePeopleInput(e) {
  people = peopleInput.value;
  calculate();
  populate();
}
function resetHandler(e) {
  dollarInput.value = null;
  peopleInput.value = null;
  tipFactor = 0.05;
  Array.from(selectionGrid).forEach((element) => {
    element.classList.remove("active");
  });
  selectionGrid[0].classList.add("active");
  populate();
}

function calculate() {
    tipAmount = (Math.round(((dollar * tipFactor) / people )*100))/100;
  tipTotal =
    Math.round((tipAmount + dollar / people) * 100) / 100;

}

function populate() {
  tipTotalContainer.innerHTML = "$" + tipTotal.toString();
  tipAmountContainer.innerHTML = "$" + tipAmount.toString();
}

dollarInput.addEventListener("change", handleDollarInput);
peopleInput.addEventListener("change", handlePeopleInput);
selectionGridContainer.addEventListener("click", handleSelectionGrid);
selectionGridContainer.addEventListener("change", handleSelectionGrid);
resetButton.addEventListener("click", resetHandler);
