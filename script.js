document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM fully loaded and parsed'); // Check if DOM is loaded

    const logoGif = document.getElementById('logoGif');

    if (!logoGif) {
        console.error('Element with ID "logoGif" not found.');
        return;
    }

    logoGif.addEventListener('canplaythrough', function() {
        console.log('Logo GIF is ready to play.');
    });

    logoGif.addEventListener('error', function(event) {
        console.error('Logo GIF loading error:', event);
    });

    // Adjust brightness and contrast for logo
    setInterval(() => {
        let brightness = 1 + 0.2 * Math.sin(Date.now() / 1000); // Oscillate brightness
        let contrast = 1 + 0.2 * Math.cos(Date.now() / 1000); // Oscillate contrast
        logoGif.style.filter = `brightness(${brightness}) contrast(${contrast})`; // Apply brightness and contrast

        // Log filter values for debugging
        console.log(`Logo filter applied - brightness: ${brightness}, contrast: ${contrast}`);
    }, 1000 / 30); // 30 FPS
});
