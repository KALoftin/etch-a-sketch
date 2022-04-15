const CONTAINER = document.querySelector('.container');
const RESET = document
  .getElementById('reset-button')
  .addEventListener('click', resetButton);
let divNum = 40;

function inputFunction(val) {
  divNum = val;
  document.getElementById('boxValue').innerHTML = `${val} x ${val}`;
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
      ROWDIV.className = 'row-div';
      ROWDIV.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = 'red';
      });
      COLUMNDIV.appendChild(ROWDIV);
    }
  }
}

function resetButton() {
  clearBoard(divNum, true);
}

clearBoard(divNum);
