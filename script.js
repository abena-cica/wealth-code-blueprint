const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
    siteNav.classList.toggle("is-open", !isExpanded);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      siteNav.classList.remove("is-open");
    }
  });
}

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const answer = document.getElementById(button.getAttribute("aria-controls"));

    button.setAttribute("aria-expanded", String(!isExpanded));
    answer.hidden = isExpanded;
  });
});
