let timerInterval;
let startTime;
let elapsedTime = 0;

const timeLabel = document.getElementById('timeLabel');
const datePicker = document.getElementById('datePicker');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

async function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 1000);
}

// Set the initial date value to the current date
const currentDate = new Date().toISOString().slice(0, 10);
datePicker.value = currentDate;

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    displayTime(elapsedTime);
}

function displayTime(time) {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    timeLabel.textContent = formattedTime;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    displayTime(elapsedTime);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);



