
// Remove .html extension from the URL
 // Check if the URL ends with .html
 if (window.location.href.endsWith('.html')) {
    // Remove the last 5 characters (.html)
    var newLocation = window.location.href.slice(0, -5);
    // Redirect to the new URL
    window.location.href = newLocation;
}