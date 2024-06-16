document.addEventListener("DOMContentLoaded", function() {
    var hamburgers = document.querySelectorAll(".hamburger");
    hamburgers.forEach(function(hamburger) {
        hamburger.addEventListener("click", function() {
            this.classList.toggle("is-active");
        });
    });
});