const bntStart = document.querySelector('button[data-start]');
const bntStop = document.querySelector('button[data-stop]');
let timerId = null;
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

bntStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    bntStart.disabled = true;
    bntStop.disabled = false;

    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

bntStop.addEventListener('click', () => {
  bntStart.disabled = false;
  bntStop.disabled = true;

  clearInterval(timerId);
});
