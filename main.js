const selectedNumbers = [];
const oddNumbers = [];
const evenNumbers = [];

const createColumns = () => {
  const columnWrapper = document.querySelector("[data-columnWrapper]");
  columnWrapper.style.width = "50%";
  columnWrapper.style.height = "auto";
  columnWrapper.style.backgroundColor = "green";
  columnWrapper.style.margin = "0 auto";
  columnWrapper.style.display = "flex";

  const evenNumsColumn = document.createElement("div");
  const oddNumsColumn = document.createElement("div");

  columnWrapper.appendChild(evenNumsColumn);
  columnWrapper.appendChild(oddNumsColumn);
};

const generateNumbers = () => {
  createColumns();

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
  console.log(oddNumbers);
  console.log(evenNumbers);
};

generateNumbers();
console.log(selectedNumbers);
