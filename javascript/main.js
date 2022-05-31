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
  let topPos = f1Racer.offsetTop;
  let leftPos = f1Racer.offsetLeft;
  if (f1Data.direction === 'north') {
    topPos -= 3;
    f1Racer.style.top = topPos + 'px';
    f1Data.location.y = f1Racer.style.top;
  } else if (f1Data.direction === 'east') {
    leftPos += 3;
    f1Racer.style.left = leftPos + 'px';
    f1Data.location.x = f1Racer.style.left;
  } else if (f1Data.direction === 'south') {
    topPos += 3;
    f1Racer.style.top = topPos + 'px';
    f1Data.location.y = f1Racer.style.top;
  } else if (f1Data.direction === 'west') {
    leftPos -= 3;
    f1Racer.style.left = leftPos + 'px';
    f1Data.location.x = f1Racer.style.left;
  }
}

function f1RacerControl(e) {
  if (e.keyCode === 38 || e.keyCode === 87) {
    f1Data.direction = 'north';
    f1Racer.style.transform = 'rotate(-90deg)'
  } else if (e.keyCode === 37 || e.keyCode === 65) {
    f1Data.direction = 'west';
    f1Racer.style.transform = 'rotate(180deg)'
  } else if (e.keyCode === 40 || e.keyCode === 83) {
    f1Data.direction = 'south';
    f1Racer.style.transform = 'rotate(90deg)'
  } else if (e.keyCode === 39 || e.keyCode === 68) {
    f1Data.direction = 'east';
    f1Racer.style.transform = 'rotate(0deg)'
  } else if (e.keyCode === 32) {
    startF1Racer()
    if (intervalID !== null) {
      clearInterval(intervalID)
      intervalID = null;
    } else if (intervalID === null) {
      intervalID = setInterval(startF1Racer, 16);
    }
  }
};

window.addEventListener('keydown', f1RacerControl)
