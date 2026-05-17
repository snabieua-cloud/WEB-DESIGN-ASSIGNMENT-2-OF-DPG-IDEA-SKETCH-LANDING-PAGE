// Run after the page loads
document.addEventListener("DOMContentLoaded", () => {
  
  // Handle the "Connect to Learn" button
  const ctaButton = document.querySelector(".cta-btn");
  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      alert("Welcome to EduConnect SL 🚀 Empowering students in Sierra Leone!");
    });
  }

  // Highlight active navigation link
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Rotate testimonials automatically
  const testimonials = document.querySelectorAll(".testimonials blockquote");
  let index = 0;
  if (testimonials.length > 0) {
    setInterval(() => {
      testimonials.forEach(t => t.style.display = "none");
      testimonials[index].style.display = "block";
      index = (index + 1) % testimonials.length;
    }, 4000); // change every 4 seconds
  }
});
