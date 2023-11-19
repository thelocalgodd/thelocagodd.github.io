window.addEventListener('resize', function() {
    if (window.innerWidth <= 900) {
        window.location.href = "../pages/mobilepage.html"; 
    } 
    if (window.innerWidth > 900) {
        window.location.href = "../pages/projects.html"; 
    }
});
