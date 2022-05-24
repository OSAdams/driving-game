const f1Racer = document.querySelector('#f1-car')
const f1Data = {
  direction: 'east',
  location: {
    x: 0,
    y: 0,
  }
}
let intervalID = null;

function startF1Racer() {
    let leftPos = f1Racer.offsetLeft;
    f1Racer.style.left = leftPos + 3 + 'px';
    f1Data.location.x = f1Racer.style.left;
}

window.addEventListener('keydown', e => {
  if (e.keyCode === 32) {
    if (intervalID !== null) {
      clearInterval(intervalID)
      intervalID = setInterval(startF1Racer, 16);
    } else if (intervalID === null) {
      intervalID = setInterval(startF1Racer, 16);
    }
  };
});
