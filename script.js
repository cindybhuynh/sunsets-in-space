// Define elements at the start
const body = document.body;
const timeDisplayElement = document.getElementById('time-display');

// Get the toggle buttons
const dayButton = document.getElementById('btn-day');
const afternoonButton = document.getElementById('btn-afternoon');
const eveningButton = document.getElementById('btn-evening');
const nightButton = document.getElementById('btn-night');

// ----------------------------------------------
// PART 1: Background Logic
// ----------------------------------------------

// Variable to track if the mode is manual or automatic
let manualMode = false;

// Function to set the background class manually
function setBackgroundClass(className) {
    // 1. Set the mode to manual
    manualMode = true;
    
    // 2. Clear all existing classes and apply the new one
    body.className = '';
    body.classList.add(className);

    // Optional: Visually indicate which button is active (requires CSS styling)
    // You could also disable the automatic background interval if you want the clock to stop changing
}

// Original automatic function, now checks the manualMode flag
function updateBackground() {
    if (manualMode) {
        // If a button has been clicked, stop the automatic updates.
        return;
    }
    
    const hour = new Date().getUTCHours();
    body.className = ''; // Reset classes (Only if not in manual mode)

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

// ----------------------------------------------
// PART 2: Time Logic (Remains the same)
// ----------------------------------------------

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'UTC' });
    timeDisplayElement.textContent = timeString; 
}

// ----------------------------------------------
// PART 3: Event Listeners
// ----------------------------------------------

dayButton.addEventListener('click', () => setBackgroundClass('day'));
afternoonButton.addEventListener('click', () => setBackgroundClass('afternoon'));
eveningButton.addEventListener('click', () => setBackgroundClass('evening'));
nightButton.addEventListener('click', () => setBackgroundClass('night'));


// ----------------------------------------------
// PART 4: Initialization and Intervals
// ----------------------------------------------

// Initial calls
updateBackground();
updateTime();

// Automatic updates
setInterval(updateBackground, 60000); // Update time-based background every minute
setInterval(updateTime, 1000); // Update time display every second