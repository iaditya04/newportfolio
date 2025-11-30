function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const profileSection = document.querySelector("#profile");

  // Add animation when section enters the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          profileSection.classList.add("in-view");
        }
      });
    },
    { threshold: 0.3 }
  );

  if (profileSection) observer.observe(profileSection);
});
// Typing animation for profile section
document.addEventListener("DOMContentLoaded", () => {
  const typingEl = document.querySelector(".section__text__p2");
  const roles = [
    "Web Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "React Learner",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      currentText = currentRole.substring(0, charIndex--);
    } else {
      currentText = currentRole.substring(0, charIndex++);
    }

    typingEl.textContent = currentText;

    // typing speed
    let typeSpeed = isDeleting ? 70 : 120;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 1500; // pause before deleting
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500; // small delay before typing next
    }

    setTimeout(type, typeSpeed);
  }

  type();
});
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector("#about");
  const bioEl = document.querySelector(".about-bio");
  const bioText = bioEl ? bioEl.textContent.trim() : "";
  bioEl && (bioEl.textContent = ""); // clear initially

  // IntersectionObserver to trigger slide-down
  if (aboutSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutSection.classList.add("in-view");
            startTypingBio();
            observer.unobserve(aboutSection); // trigger only once
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(aboutSection);
  }

  // Typing function for bio
  function startTypingBio() {
    if (!bioEl) return;
    let index = 0;

    function type() {
      bioEl.textContent = bioText.substring(0, index++);
      if (index <= bioText.length) {
        setTimeout(type, 25); // typing speed in ms
      }
    }

    type();
  }
});
// Skills section animation
const skillsSection = document.querySelector("#skills");
const skillCards = document.querySelectorAll("#skills .details-container article");

if (skillsSection) {
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillsSection.classList.add("in-view");

        // Stagger each skill card
        skillCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 150); // 150ms delay per card
        });

        skillsObserver.unobserve(skillsSection); // run once
      }
    });
  }, { threshold: 0.3 });

  skillsObserver.observe(skillsSection);
}

// Projects section animation
const projectsSection = document.querySelector("#projects");
const projectCards = document.querySelectorAll("#projects .details-container.color-container");

if (projectsSection) {
  const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        projectsSection.classList.add("in-view");

        // Stagger each project card
        projectCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 200); // 200ms delay per card
        });

        projectsObserver.unobserve(projectsSection); // run once
      }
    });
  }, { threshold: 0.3 });

  projectsObserver.observe(projectsSection);
}

