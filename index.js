function detectPreferredMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.body.classList.add('dark-mode');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    detectPreferredMode();
});

