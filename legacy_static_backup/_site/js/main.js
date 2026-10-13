// ==========================================================================
// Zemprolabs — main.js (vanilla, no framework)
// ==========================================================================

// --- Mobile nav toggle ---
(function navToggle() {
  const btn = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (!btn || !links) return;
  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
})();

// --- Scroll reveal ---
(function scrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => observer.observe(el));
})();

// --- Work / case study filter ---
(function caseStudyFilter() {
  const filterBar = document.querySelector("[data-filters]");
  const cards = document.querySelectorAll("[data-case-card]");
  if (!filterBar || !cards.length) return;

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");

    cards.forEach((card) => {
      const tags = (card.getAttribute("data-tags") || "").split(",").map((t) => t.trim());
      const show = filter === "all" || tags.includes(filter);
      card.style.display = show ? "" : "none";
    });
  });
})();

// --- Contact form validation ---
(function contactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const validators = {
    name: (v) => v.trim().length > 1,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    projectType: (v) => v.trim().length > 0,
    message: (v) => v.trim().length > 8,
  };

  function validateField(field) {
    const group = field.closest(".form-group");
    const validator = validators[field.name];
    if (!validator) return true;
    const valid = validator(field.value);
    if (group) group.classList.toggle("invalid", !valid);
    return valid;
  }

  form.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let allValid = true;
    form.querySelectorAll("input, select, textarea").forEach((field) => {
      if (validators[field.name] && !validateField(field)) allValid = false;
    });
    if (!allValid) return;

    // In production this would POST to a form endpoint (e.g. Netlify Forms,
    // Formspree, or a custom API route). Redirecting to the thank-you page
    // for now so the flow is demonstrable end to end.
    window.location.href = "/thank-you/";
  });
})();
