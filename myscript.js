const CONTAINER = document.querySelector('.container');
const RESET = document
  .getElementById('reset-button')
  .addEventListener('click', resetButton);
let divNum = 40;

function userChangeValue(val) {
  document.getElementById('boxValue').innerHTML = `${val} x ${val}`;
}

function boxSizeChange(val) {
  divNum = val;
  resetButton();
}

function clearBoard(num = 40, checkBoard = false) {
  if (checkBoard) {
    while (CONTAINER.firstChild) {
      CONTAINER.removeChild(CONTAINER.firstChild);
    }
  }

  document.getElementById('boxValue').innerHTML = `${num} x ${num}`;

  for (let i = 0; i < num; i++) {
    const COLUMNDIV = document.createElement('div');
    COLUMNDIV.className = 'column-div';
    CONTAINER.appendChild(COLUMNDIV);
    for (let j = 0; j < num; j++) {
      const ROWDIV = document.createElement('div');
      let darkness = 100;
      ROWDIV.className = 'row-div';
      ROWDIV.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor =
          '#' + Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.filter = `brightness(${(darkness = darkness - 10)}%)`;
      });
      COLUMNDIV.appendChild(ROWDIV);
    }
  }
}

function resetButton() {
  clearBoard(divNum, true);
}

clearBoard(divNum);
