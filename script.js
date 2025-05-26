// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Contact Form Handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const whatsappMessage = `Halo CHIZU BITES!%0A%0ANama: ${name}%0ATelepon: ${phone}%0APesan: ${message}`;
  const whatsappURL = `https://wa.me/6281264841181?text=${whatsappMessage}`; // Replace with actual WhatsApp number

  window.open(whatsappURL, "_blank");

  // Optional: Clear form fields after submission
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Animate elements on scroll using Intersection Observer
const observerOptions = {
  threshold: 0.1, // Trigger when 10% of the element is visible
  rootMargin: "0px 0px -50px 0px", // Adjust if elements are animating too early/late
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Initial observation for hero section elements
// This ensures hero elements animate even if the page loads directly to top
const heroSection = document.querySelector(".hero");
if (heroSection) {
  const heroElementsToAnimate = heroSection.querySelectorAll(
    ".hero-title, .hero-description, .feature-item, .btn"
  );
  heroElementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
}

// Floating elements animation (already defined in CSS, but this ensures they apply)
const floatingElements = document.querySelectorAll(".float-element");
floatingElements.forEach((element, index) => {
  // Adding a class to trigger CSS animation (if not already handled by general observer)
  // For more control, individual animation properties can be set here.
  // In this case, the CSS animation 'popAndFloat' is infinite, so no JS trigger needed after initial load.
});

// Add floating animation to product cards (already defined in CSS with transform/opacity/delay)
const productCards = document.querySelectorAll(".product-card");
productCards.forEach((card, index) => {
  // Already handled by the general intersection observer and CSS for stagger effect
});
