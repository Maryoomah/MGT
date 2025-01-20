

document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is visible
  );

  serviceCards.forEach((card) => observer.observe(card));
});


function showTestimonial(index) {
  const testimonials = document.getElementsByClassName("testimonial");
  const dots = document.getElementsByClassName("dot");

  // Convert HTMLCollection to Array so we can use forEach
  Array.from(testimonials).forEach((testimonial) => {
    testimonial.classList.add("absolute"); // Hide all testimonials
    testimonial.classList.remove("relative"); // Remove 'relative' to hide
    testimonial.style.opacity = 0; // Fade out the testimonials
    testimonial.style.transition = "opacity 0.5s"; // Smooth transition for opacity
  });

  Array.from(dots).forEach((dot) => {
    dot.classList.remove("bg-blue-600"); // Reset all dots to gray
    dot.classList.add("bg-gray-400");
  });

  // Show the selected testimonial
  testimonials[index].classList.add("relative"); // Show the selected testimonial
  testimonials[index].classList.remove("absolute");
  testimonials[index].style.opacity = 1; // Fade in the selected testimonial

  // Highlight the active dot
  dots[index].classList.add("bg-blue-600"); // Active dot is blue
  dots[index].classList.remove("bg-gray-400");
}

// Initialize with the first testimonial active
document.addEventListener("DOMContentLoaded", () => showTestimonial(0));


const toggleButton = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

toggleButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

// Toggle Navbar
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
 //footer
document.getElementById("year").textContent = new Date().getFullYear();
