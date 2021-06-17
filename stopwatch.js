let ct = document.querySelector("#content");
const start_btn = document.querySelector("#start_stopwatch");
const stop_btn = document.querySelector("#stop_stopwatch");
const reset_btn = document.querySelector("#reset_stopwatch");

let sec = 0;
let min = 0;
let hr = 0;

var stopwatchID = null;
var defaultValue = `0${hr}:0${min}:0${sec}`;

let timerCycle = () => {
  sec++;
  ct.innerHTML = `0${hr}:0${min}:0${sec}`;
  if (sec >= 10) {
    ct.innerHTML = `0${hr}:0${min}:${sec}`;
  } else if (min >= 10) {
    ct.innerHTML = `0${hr}:${min}:0${sec}`;
  } else if (hr >= 10) {
    ct.innerHTML = `${hr}:0${min}:0${sec}`;
  }

  if (sec >= 59) {
    sec = 0;
    min++;
  } else if (min >= 59) {
    sec = 0;
    min = 0;
    hr++;
  }
};

start_btn.addEventListener("click", () => {
  stopwatchID = setInterval(() => {
    timerCycle();
  }, 1000);
  start_btn.disabled = true;
});

stop_btn.addEventListener("click", () => {
  clearInterval(stopwatchID);
  start_btn.disabled = false;
});

reset_btn.addEventListener("click", () => {
  sec = 0;
  min = 0;
  hr = 0;
  ct.innerHTML = defaultValue;
  clearInterval(stopwatchID);
});
