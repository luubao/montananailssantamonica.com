const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const revealItems = document.querySelectorAll(
  ".hero-copy, .hero-media, .section-heading, .trust-card, .service-card, .experience-card, .gallery-tile, .lookbook-thumb, .detail-card, .testimonial-card, .faq-card, .contact-card, .final-cta, .menu-card, .page-image, .service-image"
);
const lightbox = document.querySelector("[data-lightbox-root]");
const lightboxImage = lightbox?.querySelector("img");
const lightboxClose = lightbox?.querySelector("button");
const lightboxTriggers = document.querySelectorAll("[data-lightbox]");

if (header && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });
}

if (lightbox && lightboxImage) {
  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
    lightboxImage.src = "";
    lightboxImage.alt = "";
  };

  lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const src = trigger.getAttribute("data-lightbox");
      const alt = trigger.getAttribute("data-lightbox-alt") || "";

      if (!src) {
        return;
      }

      lightboxImage.src = src;
      lightboxImage.alt = alt;
      lightbox.classList.add("is-open");
      document.body.classList.add("lightbox-open");
    });
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  lightboxClose?.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
