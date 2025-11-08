const body = document.body;

function updateBackground() {
    const hour = new Date().getHours();
    body.className = ''; // Reset classes

    if (hour >= 6 && hour < 12) {
        body.classList.add('day');
    } else if (hour >= 12 && hour < 18) {
        body.classList.add('afternoon');
    } else if (hour >= 18 && hour < 21) {
        body.classList.add('evening');
    } else {
        body.classList.add('night');
    } 
}

body.append("Hello World!");
