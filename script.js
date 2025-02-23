document.addEventListener("DOMContentLoaded", function () {
    // Form Validation
    document.querySelector(".contact-form form").addEventListener("submit", function (event) {
        const name = document.querySelector(".contact-form input[type='text']").value.trim();
        const email = document.querySelector(".contact-form input[type='email']").value.trim();
        const message = document.querySelector(".contact-form textarea").value.trim();
        let valid = true;
        
        if (!name) {
            alert("Please enter your name.");
            valid = false;
        }
        if (!email || !email.includes("@")) {
            alert("Please enter a valid email address.");
            valid = false;
        }
        if (!message) {
            alert("Please enter your message.");
            valid = false;
        }
        
        if (!valid) {
            event.preventDefault();
        }
    });
  
    // Responsive Navbar Toggle
    const toggleBtn = document.querySelector(".navbar-toggle");
    const navMenu = document.querySelector(".navbar-menu");
  
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }
  
    // Gallery Carousel (if implemented)
    let currentIndex = 0;
    const images = document.querySelectorAll(".gallery-grid img");
    
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }
    
    if (images.length > 0) {
        showImage(currentIndex);
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 3000); // Change image every 3 seconds
    }
  
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
  });
  