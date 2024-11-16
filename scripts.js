// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menuBox = document.querySelector('.menu-box');

menuToggle.addEventListener('click', () => {
    // Toggle menu visibility
    menuBox.style.display = menuBox.style.display === 'block' ? 'none' : 'block';
});

// Countdown Timer
function startCountdown(durationInSeconds) {
    const countdownElement = document.getElementById('countdown');
    let timer = durationInSeconds;

    const interval = setInterval(() => {
        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;

        // Format time
        const formattedTime = [
            hours.toString().padStart(2, '0'),
            minutes.toString().padStart(2, '0'),
            seconds.toString().padStart(2, '0')
        ].join(':');

        countdownElement.textContent = formattedTime;

        if (--timer < 0) {
            clearInterval(interval);
            countdownElement.textContent = 'Expired!';
        }
    }, 1000); // Update every second
}

// Start a countdown of 7 hours (7 * 60 * 60 seconds)
startCountdown(7 * 60 * 60);

// Upload Confirmation (Optional)
const uploadForm = document.querySelector('#document-upload form');
if (uploadForm) {
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your document has been submitted successfully!');
    });
}
