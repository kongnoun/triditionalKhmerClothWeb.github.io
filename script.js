document.addEventListener('DOMContentLoaded', function() {
    var navlinks = document.querySelector('navlinks');
    var navbar= document.querySelector('navbar');
    
    if (navlinks.display === "block") {
        navlinks.style.display = "none";
    } else {
        navlinks.style.display = "block";
    }

    if (navbar.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "none";
    }
});