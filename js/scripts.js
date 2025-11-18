// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Intro animation for sidebar items
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

// Scroll indicator wheel animation
gsap.to(".wheel", {
  y: 6,
  opacity: 0.4,
  repeat: -1,
  yoyo: true,
  duration: 1.1,
  ease: "power1.inOut"
});

// Subtle hero video zoom effect
gsap.to("#hero-video", {
  scale: 1,
  filter: "brightness(0.8)",
  duration: 1.4,
  ease: "power3.out"
});

// Scroll reveal for sections
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 60,
    duration: 1.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});
// SIDEBAR TOGGLE (MOBILE HAMBURGER MENU)
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        menuBtn.classList.toggle("active");
    });
}

// Close sidebar when clicking outside (optional)
document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove("open");
        menuBtn.classList.remove("active");
    }
});
// MOBILE SIDEBAR TOGGLE
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
