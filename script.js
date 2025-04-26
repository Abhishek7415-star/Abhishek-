let timer = document.getElementById('timer');
let laps = document.getElementById('laps');

let seconds = 0, minutes = 0, hours = 0;
let interval = null;
let isRunning = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timer.textContent = `${h}:${m}:${s}`;
}

function startStop() {
  if (!isRunning) {
    interval = setInterval(() => {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

function pause() {
  clearInterval(interval);
  isRunning = false;
}

function reset() {
  clearInterval(interval);
  isRunning = false;
  seconds = minutes = hours = 0;
  updateDisplay();
  laps.innerHTML = "";
}

function recordLap() {
  if (!isRunning) return;
  const lapTime = timer.textContent;
  const lapItem = document.createElement("div");
  lapItem.textContent = `Lap: ${lapTime}`;
  laps.appendChild(lapItem);
}
