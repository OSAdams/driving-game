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

function f1RacerControl(e) {
  if (e.keyCode === 37 || e.keyCode === 65) {
    f1Data.direction = 'west';
    f1Racer.style.transform = 'rotate(180deg)'
  } else if (e.keyCode === 38 || e.keyCode === 87) {
    f1Data.direction = 'north';
    f1Racer.style.transform = 'rotate(-90deg)'
  } else if (e.keyCode === 39 || e.keyCode === 68) {
    f1Data.direction = 'east';
    f1Racer.style.transform = 'rotate(0deg)'
  } else if (e.keyCode === 40 || e.keyCode === 83) {
    f1Data.direction = 'south';
    f1Racer.style.transform = 'rotate(90deg)'
  } else if (e.keyCode === 32) {
    startF1Racer()
    if (intervalID !== null) {
      clearInterval(intervalID)
      intervalID = setInterval(startF1Racer, 16);
    } else if (intervalID === null) {
      intervalID = setInterval(startF1Racer, 16);
    }
  }
  console.log('value of f1Data.direction', f1Data.direction);
};

window.addEventListener('keydown', f1RacerControl)
