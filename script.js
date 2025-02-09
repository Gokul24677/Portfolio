// Smooth scroll to sections when buttons are clicked
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    window.scrollTo({
        top: section.offsetTop - 70,  // Offset for fixed header
        behavior: 'smooth'
    });
}

// Contact form handling 
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent!');
});
