const body = document.body;
// Define the time display element once at the start
const timeDisplayElement = document.getElementById('time-display');

function updateBackground() {
    const hour = new Date().getUTCHours();
    body.className = ''; // Reset classes

    if (hour >= 6 && hour < 12) {
        body.classList.add('day');
    } else if (hour >= 12 && hour < 17) {
        body.classList.add('afternoon');
    } else if (hour >= 17 && hour < 20) {
        body.classList.add('evening');
    } else {
        body.classList.add('night');
    }  
}

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'UTC' });
    document.getElementById('time-display').textContent = timeString;
    timeDisplayElement.textContent = timeString;
}

updateBackground();
updateTime();
setInterval(updateBackground, 60000); // Update every minute
setInterval(updateTime, 1000); // Update every second