document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const skillsSection = document.querySelector(".skills-section");
  const progressBars = document.querySelectorAll(".progress-bar");

  // --- Initialize AOS ---
  if (window.AOS) {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }

  // --- Initialize Typed.js ---
  const typedElement = document.querySelector(".typed");
  if (typedElement) {
    const items = typedElement
      .getAttribute("data-typed-items")
      .split(",")
      .map((i) => i.trim());
    new Typed(".typed", {
      strings: items,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  }

  // --- Scroll Function (Navbar, Active Link, Skills Animation) ---
  let skillsAnimated = false;
  function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar background toggle
    navbar.classList.toggle("scrolled", scrollY > 100);

    // Active link highlighting
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href").includes(current)
      );
    });

    // Skills progress bar animation
    if (skillsSection && !skillsAnimated) {
      const sectionPos = skillsSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.4;
      if (sectionPos < screenPos) {
        progressBars.forEach((bar) => {
          const value = bar.getAttribute("data-percentage");
          bar.style.width = value + "%";
        });
        skillsAnimated = true;
      }
    }
  }

  // Attach scroll listener
  window.addEventListener("scroll", handleScroll);
});
