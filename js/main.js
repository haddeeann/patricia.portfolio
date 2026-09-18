const navLinks = [...document.querySelectorAll('.primary-nav a')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setCurrentSection = (id) => {
  navLinks.forEach((link) => {
    if (link.getAttribute('href') === `#${id}`) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

setCurrentSection('projects');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) setCurrentSection(visible.target.id);
  }, { rootMargin: '-20% 0px -60%', threshold: [0, 0.2, 0.5] });

  sections.forEach((section) => observer.observe(section));
}
