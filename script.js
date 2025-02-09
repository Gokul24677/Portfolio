// Smooth scroll to sections when buttons are clicked
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    window.scrollTo({
        top: section.offsetTop - 70,  // Offset for fixed header
        behavior: 'smooth'
    });
}

// Contact form handling (just a simple placeholder, you can add actual form handling logic here)
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent!');
});
