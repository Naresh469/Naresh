// Safe Menu Toggle + GSAP animations (robust)
(function () {
  // Wait until DOM loaded (if script loaded with defer this still safe)
  document.addEventListener('DOMContentLoaded', () => {

    // --- GSAP animations (keep these if you want) ---
    if (window.gsap) {
      try {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".nav-item", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.06,
          delay: 0.15,
          ease: "power3.out"
        });

        gsap.from(".hero-text h2", {
          opacity: 0,
          y: 25,
          duration: 1.0,
          ease: "power3.out"
        });
        gsap.from(".hero-text p", {
          opacity: 0,
          y: 18,
          delay: 0.18,
          duration: 1.0,
          ease: "power3.out"
        });

        gsap.to(".wheel", {
          y: 6,
          opacity: 0.5,
          repeat: -1,
          yoyo: true,
          duration: 1.1,
          ease: "power1.inOut"
        });
      } catch (e) {
        // If GSAP errors, don't break the rest
        console.warn('GSAP error (non-fatal):', e);
      }
    }

    // --- Menu toggle logic (robust) ---
    // Try to get any of the possible menu button elements
    const menuBtn = document.getElementById('menuBtn') || document.querySelector('.hamburger') || document.querySelector('.menu-btn');
    const sidebar = document.getElementById('sidebar') || document.querySelector('.sidebar');

    if (!menuBtn || !sidebar) {
      // If either element missing, nothing to do — log for debugging
      console.warn('Menu button or sidebar not found. menuBtn=', menuBtn, ' sidebar=', sidebar);
      return;
    }

    // Toggle function
    const toggleSidebar = (ev) => {
      // prevent the click from bubbling to document (so outside-click won't immediately close)
      if (ev) ev.stopPropagation();

      sidebar.classList.toggle('active');
      menuBtn.classList.toggle('active');
      // Lock body scroll when sidebar open on small screens
      if (sidebar.classList.contains('active')) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      }
    };

    // Attach click
    menuBtn.addEventListener('click', toggleSidebar);

    // Close when clicking outside sidebar (only when sidebar is open)
    document.addEventListener('click', (e) => {
      // if sidebar not open, ignore
      if (!sidebar.classList.contains('active')) return;

      // if click inside sidebar or on menuBtn, ignore
      if (sidebar.contains(e.target) || menuBtn.contains(e.target)) return;

      // otherwise close
      sidebar.classList.remove('active');
      menuBtn.classList.remove('active');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    });

    // Close on escape key
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        menuBtn.classList.remove('active');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      }
    });

    // Also stop clicks inside sidebar from closing (prevent accidental)
    sidebar.addEventListener('click', (e) => e.stopPropagation());

    // Optional: Close nav links on click (mobile) so menu collapses after choosing
    sidebar.querySelectorAll('a.nav-item').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 850) {
          sidebar.classList.remove('active');
          menuBtn.classList.remove('active');
          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
        }
      });
    });

    // Debug log to know script ran
    // console.log('Sidebar toggle initialized.');
  });
})();
