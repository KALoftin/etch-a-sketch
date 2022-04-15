const DIVNUM = 40;
const CONTAINER = document.querySelector('.container');
const RESET = document
  .getElementById('reset-button')
  .addEventListener('click', resetButton);

for (let i = 0; i < DIVNUM; i++) {
  const COLUMNDIV = document.createElement('div');
  COLUMNDIV.className = 'column-div';
  CONTAINER.appendChild(COLUMNDIV);

  for (let j = 0; j < DIVNUM; j++) {
    const ROWDIV = document.createElement('div');
    ROWDIV.className = 'row-div';
    ROWDIV.addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = 'red';
    });
    COLUMNDIV.appendChild(ROWDIV);
  }
}

function resetButton() {
  alert('Yo');
}
