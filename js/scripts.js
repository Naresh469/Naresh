// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Sidebar nav animation
gsap.to(".nav-item", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.08,
  delay: 0.2,
  ease: "power3.out"
});

// Hero text animation
gsap.from(".hero-text h2", { opacity: 0, y: 25, duration: 1.2, ease: "power3.out" });
gsap.from(".hero-text p", { opacity: 0, y: 18, delay: 0.2, duration: 1.2, ease: "power3.out" });

// Scroll indicator animation
gsap.to(".wheel", {
  y: 6,
  opacity: 0.4,
  repeat: -1,
  yoyo: true,
  duration: 1.1,
  ease: "power1.inOut"
});

// Section Reveal Animation
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

// ------------------------------
// MOBILE SIDEBAR TOGGLE
// ------------------------------
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtn.classList.toggle("active");
});

// Close sidebar when clicking outside
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.remove("open");
    menuBtn.classList.remove("active");
  }
});
