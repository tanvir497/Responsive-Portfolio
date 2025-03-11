$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

     // Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Change Icon
    if (body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
    } else {
        themeToggle.innerHTML = "<i class='bx bx-moon'></i>";
    }
});

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Fontend", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Full-Strack-Development", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Search Function
function searchSite() {
    let input = document.getElementById("search-input").value.trim().toLowerCase();
    
    // Internal page sections
    let sections = ["home", "about", "services", "skills", "teams", "contact"];
    
    // External website links
    let sites = {
        "chrome": "https://www.google.com/chrome/",
        "google chrome": "https://www.google.com/chrome/",
        "youtube": "https://www.youtube.com/",
        "yahoo": "https://www.yahoo.com/",
        "github": "https://github.com/",
        "google": "https://www.google.com/"
    };

    if (input === "") {
        alert("Please enter a search term!");
        return;
    }

    // Check if input matches a section within the page
    if (sections.includes(input)) {
        window.location.hash = "#" + input; // Scroll to section
    } 
    // Check if input matches an external website
    else if (sites[input]) {
        window.open(sites[input], "_blank"); // Open in new tab
    } 
    // If not found, perform a Google search
    else {
        let searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(input);
        window.open(searchUrl, "_blank"); 
    }
}


// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill out all fields!";
        return;
    }

    // Simulate a successful message submission
    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";
    
    // Clear form fields
    document.getElementById("contact-form").reset();
});

// Contact Form Submission (Prevent Default)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
});



