const container = document.querySelector('.container');
const reset = document
  .getElementById('reset-button')
  .addEventListener('click', resetButton);

for (let i = 0; i < 256; i++) {
  const gridDivs = document.createElement('div');
  gridDivs.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'red';
  });
  container.appendChild(gridDivs);
}

function resetButton() {
  alert('Yo');
}
