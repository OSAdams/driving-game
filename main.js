const f1Racer = document.querySelector('#f1-car')
const f1Data = {
  direction: 'east',
  location: {
    x: 0,
    y: 0,
  }
}

function startF1Racer() {
    let leftPos = f1Racer.offsetLeft;
    f1Racer.style.left = leftPos + 3 + 'px';
}

window.addEventListener('keydown', e => {
  if (e.keyCode === 32) {
    const intervalID = setInterval(startF1Racer, 16);
  };
});
