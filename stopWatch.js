let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;
let hours = 0, minutes = 0, seconds = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Start the stopwatch
startButton.addEventListener('click', () => {
  if (!running) {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTime, 1000);
    running = true;
  }
});

// Stop the stopwatch
stopButton.addEventListener('click', () => {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  }
});

// Reset the stopwatch
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  hours = minutes = seconds = 0;
  running = false;
});

// Update the displayed time
function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  seconds = Math.floor((difference / 1000) % 60);
  minutes = Math.floor((difference / (1000 * 60)) % 60);
  hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

  display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

// Format time values to always be two digits
function formatTime(time) {
  return time < 10 ? '0' + time : time;
}
