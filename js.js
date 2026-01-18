document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL path (e.g., /pdf.html)
    const currentPath = window.location.pathname;
    
    // Get all links inside the navbar
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Get the link's href attribute (e.g., pdf.html)
        const linkPath = link.getAttribute('href');

        // Check if the current URL contains the link's path
        // We check for both exact match and default home page (index.html)
        if (currentPath.includes(linkPath) || (currentPath === '/' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            // Remove active if it was hardcoded elsewhere
            link.classList.remove('active');
        }
    });
});