// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Sidebar reveal
gsap.to(".nav-item", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.08,
  delay: 0.2,
  ease: "power3.out"
});

// Hero text animation
gsap.from(".hero-text h2", {
  opacity: 0,
  y: 25,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".hero-text p", {
  opacity: 0,
  y: 18,
  delay: 0.2,
  duration: 1.2,
  ease: "power3.out"
});

// Scroll indicator animation
gsap.to(".wheel", {
  y: 6,
  opacity: 0.4,
  repeat: -1,
  yoyo: true,
  duration: 1.1,
  ease: "power1.inOut"
});

// =====================
// MOBILE SIDEBAR TOGGLE
// =====================

// सही ID selection
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
