document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');
  const navLinks = document.querySelectorAll('.nav-item');
  const skillCards = document.querySelectorAll('.skill-card');
  const projectCards = document.querySelectorAll('.project-card');

  // Button hover effects
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      button.style.boxShadow = '0 18px 40px rgba(15, 23, 42, 0.15)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.boxShadow = 'none';
    });
  });

  // Navigation smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe cards for animations
  [...skillCards, ...projectCards].forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Animate section titles on scroll
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach((title) => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(10px)';
    title.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(title);
  });
});
