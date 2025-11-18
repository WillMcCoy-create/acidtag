

// ACIDTAG — simple motion + smooth scrolling

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const spotlight = document.querySelector(".hero-spotlight");

  // Move the soft spotlight with the mouse (desktop)
  if (hero && spotlight) {
    hero.addEventListener("mousemove", (event) => {
      const rect = hero.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      spotlight.style.setProperty("--x", `${x}px`);
      spotlight.style.setProperty("--y", `${y}px`);
    });
  }

  // Smooth scroll for any buttons/links with data-scroll-target
  const scrollLinks = document.querySelectorAll("[data-scroll-target]");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("data-scroll-target");
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
