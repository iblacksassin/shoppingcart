let endTime;
let timerInterval;
const stopwatchDisplay = document.getElementById('stopwatch');

function updateStopwatch() {
  const currentTime = new Date().getTime();
  const timeLeft = endTime - currentTime;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    stopwatchDisplay.textContent = "00:00:00";
    // You might want to do something here when the countdown reaches 0
    return; // Stop updating
  }

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  stopwatchDisplay.textContent = formattedTime;
}

function startStopwatch() {
  // Set endTime to 24 hours from the current time
  endTime = new Date().getTime() + (24 * 60 * 60 * 1000); 

  clearInterval(timerInterval);
  timerInterval = setInterval(updateStopwatch, 1000);
}

// Simulate User Login (Replace with your actual login logic)
function simulateLogin() {
  console.log("User logged in!");
  startStopwatch();
}

window.onload = simulateLogin; // Remove this for real login

// Real Login Integration: Call startStopwatch() after login
// ... your login code ...
// startStopwatch(); // Call after successful login