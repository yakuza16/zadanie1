const evenNumbers = [];
const oddNumbers = [];
const selectedNumbers = [];

let generated = false;

const columnWrapper = document.querySelector("[data-columnWrapper]");
const generateNumbersBtn = document.getElementById("random-numbers");
columnWrapper.style.width = "20%";
columnWrapper.style.height = "auto";
columnWrapper.style.margin = "0 auto";
columnWrapper.style.display = "flex";
columnWrapper.style.justifyContent = "space-evenly";

const evenNumsColumn = document.createElement("div");
const headingEvenNums = document.createElement("h1");
headingEvenNums.textContent = "Liczby Parzyste";
const headingOddNums = document.createElement("h1");
headingOddNums.textContent = "Liczby Nieparzyste";
const oddNumsColumn = document.createElement("div");
oddNumsColumn.appendChild(headingOddNums);
evenNumsColumn.appendChild(headingEvenNums);

columnWrapper.appendChild(evenNumsColumn);
columnWrapper.appendChild(oddNumsColumn);

const generateNumbers = () => {
  if (!generated) {
    while (selectedNumbers.length < 20) {
      let i = Math.floor(Math.random() * 100) + 1;
      if (selectedNumbers.indexOf(i) === -1) {
        selectedNumbers.push(i);
      }
    }
    selectedNumbers.sort((a, b) => (a > b ? 1 : -1));
    selectedNumbers.forEach((number) => {
      if (number % 2) {
        oddNumbers.push(number);
      } else evenNumbers.push(number);
    });
    evenNumbers.forEach((number) =>
      insertNumberIntoColumn(number, evenNumsColumn)
    );
    oddNumbers.forEach((number) =>
      insertNumberIntoColumn(number, oddNumsColumn)
    );
    generated = !generated;
  } else {
    shuffleNumbers();
    generated = !generated;
  }
};

const shuffleNumbers = () => {
  selectedNumbers.length = 0;
  oddNumbers.length = 0;
  evenNumbers.length = 0;
  removeOldNumbers(evenNumsColumn);
  removeOldNumbers(oddNumsColumn);
};

const removeOldNumbers = (column) => {
  const allOldNumbers = column.querySelectorAll("p");
  allOldNumbers.forEach((node) => node.remove());
};

const insertNumberIntoColumn = (text, wrapper) => {
  const numberText = document.createElement("p");
  numberText.textContent = text;
  wrapper.appendChild(numberText);
};

generateNumbersBtn.addEventListener("click", generateNumbers);
