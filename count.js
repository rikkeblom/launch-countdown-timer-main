let secondsLeft = 60;
let minutesLeft = 59;
let hoursLeft = 23;
let daysLeft = 13;

function start() {
  document.querySelector(".seconds").textContent = secondsLeft;
  document.querySelector(".minutes").textContent = minutesLeft;
  document.querySelector(".hours").textContent = hoursLeft;
  document.querySelector(".days").textContent = daysLeft;
  showTime();
}

function showTime() {
  if (secondsLeft > 0) {
    secondsLeft--;
    startTimer();
  } else if (secondsLeft == 0) {
    setMinutes();
    secondsLeft = 60;
    document.querySelector(".seconds").offsetHeight;
    startTimer();
  }
  document.querySelector(".seconds").textContent = secondsLeft;
}

function setMinutes() {
  if (minutesLeft > 0) {
    minutesLeft--;
  } else if (minutesLeft == 0) {
    setHours();
    minutesLeft = 60;
    document.querySelector(".minutes").offsetHeight;
  }
  document.querySelector(".minutes").textContent = minutesLeft;
}

function setHours() {
  if (hoursLeft > 0) {
    hoursLeft--;
  } else if (hoursLeft == 0) {
    setDays();
    document.querySelector(".hours").offsetHeight;
    hoursLeft = 24;
  }
  document.querySelector(".hours").textContent = hoursLeft;
}

function setDays() {
  if (daysLeft > 0) {
    daysLeft--;
  } else if (daysLeft == 0) {
    setDays();
  }
  document.querySelector(".days").textContent = daysLeft;
}

function startTimer() {
  if (daysLeft == 0) {
    console.log("time over!");
  } else {
    setTimeout(showTime, 1000);
  }
  console.log(
    "time left: " +
      secondsLeft +
      " seconds, " +
      minutesLeft +
      " minutes, " +
      hoursLeft +
      " hours, and" +
      daysLeft +
      " days left."
  );
}
window.addEventListener("load", start);
